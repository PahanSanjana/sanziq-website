import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useTheme } from "../context/ThemeContext";

// Enhanced device performance detection
const useDevicePerformance = () => {
  const [performance, setPerformance] = useState({
    isLowPerformance: false,
    isMobile: false,
    isSmallScreen: false
  });
  
  useEffect(() => {
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    // Check if device has limited processors
    const hasLimitedCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
    
    // Check if screen is small
    const isSmallScreen = window.innerWidth < 768;
    
    // Set performance metrics
    setPerformance({
      isLowPerformance: isMobile || hasLimitedCPU,
      isMobile,
      isSmallScreen
    });
    
    // Update small screen status on resize
    const handleResize = () => {
      setPerformance(prev => ({
        ...prev,
        isSmallScreen: window.innerWidth < 768
      }));
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return performance;
};

const ParticleScene = ({ reducedMotion = false }) => {
  const mountRef = useRef(null);
  const requestRef = useRef(null);
  const sceneRef = useRef(null);
  const { isLowPerformance, isMobile, isSmallScreen } = useDevicePerformance();
  const { theme } = useTheme();
  
  // Skip rendering for accessibility if reduced motion is preferred
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(reducedMotion);
  
  useEffect(() => {
    // Check for user's motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
    }
    
    const handleMediaChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // For reduced motion, simply render a static gradient background
      return;
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    const bgColor = theme === 'dark' ? 0x111827 : 0xf0f9ff;
    scene.fog = new THREE.FogExp2(bgColor, isSmallScreen ? 0.015 : 0.01);

    // Camera setup with dynamic aspect ratio
    const updateCameraAspect = (camera, renderer) => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.set(0, 5, isSmallScreen ? 20 : 15);

    // Renderer with anti-aliasing based on device performance
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isLowPerformance,
      powerPreference: "high-performance",
      alpha: true
    });
    renderer.setClearColor(bgColor, 1);
    
    // Optimize pixel ratio for performance
    const pixelRatio = isLowPerformance ? 1 : Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    
    // Initial size setup
    if (mountRef.current) {
      updateCameraAspect(camera, renderer);
      mountRef.current.appendChild(renderer.domElement);
    }

    // Controls for better mobile performance
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = isLowPerformance ? 0.3 : 1.0;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.update();

    // Adjust particle count based on performance
    const getParticleCount = () => {
      if (isMobile && isSmallScreen) {
        return 4000; // Very low-end mobile devices with small screens
      } else if (isLowPerformance) {
        return 8000; // Low-end devices
      }
      return 20000; // High-end devices
    };

    // Shaders
    const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      varying float vDistance;
      uniform float time;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDistance = -mvPosition.z;
        float pulse = sin(time * 2.0 + length(position)) * 0.15 + 1.0;
        vec3 pos = position;
        
        // Reduced animation complexity for better performance
        float animationScale = ${isLowPerformance ? '0.02' : '0.05'};
        pos.x += sin(time * 0.5 + position.z * 0.5) * animationScale;
        pos.y += cos(time * 0.5 + position.x * 0.5) * animationScale;
        pos.z += sin(time * 0.5 + position.y * 0.5) * animationScale;
        
        mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z) * pulse;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vDistance;
      uniform float time;
      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        float r = dot(cxy, cxy);
        if (r > 1.0) discard;
        float glow = exp(-r * 2.5);
        float outerGlow = exp(-r * 1.5) * 0.3;
        vec3 finalColor = vColor * (1.2 + sin(time * 0.5) * 0.1);
        finalColor += vec3(0.2, 0.4, 0.6) * outerGlow;
        float distanceFade = 1.0 - smoothstep(0.0, 50.0, vDistance);
        float intensity = mix(0.7, 1.0, distanceFade);
        gl_FragColor = vec4(finalColor * intensity, (glow + outerGlow) * distanceFade);
      }
    `;

    // Create particles with theme-aware colors
    const primaryColor = theme === 'dark' 
      ? new THREE.Color(0x0ea5e9) // primary-500 in dark
      : new THREE.Color(0x0284c7); // primary-600 in light
      
    const secondaryColor = theme === 'dark'
      ? new THREE.Color(0x2563eb) // blue-600
      : new THREE.Color(0x1e3a8a); // blue-900
      
    const accentColor = theme === 'dark'
      ? new THREE.Color(0x6b7280) // dark neutral
      : new THREE.Color(0xe5e7eb); // light neutral

    // Spiral Sphere with adjusted parameters
    const createSpiralSphere = (radius, count, colors) => {
      const positions = [],
        particleColors = [],
        sizes = [];
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        positions.push(x, y, z);

        const colorPos = i / count;
        const c1 = colors[Math.floor(colorPos * (colors.length - 1))];
        const c2 = colors[Math.ceil(colorPos * (colors.length - 1))];
        const mix = (colorPos * (colors.length - 1)) % 1;
        const color = new THREE.Color().lerpColors(c1, c2, mix);
        particleColors.push(color.r, color.g, color.b);
        
        // Varied particle sizes for more natural look
        sizes.push(Math.random() * 0.12 + 0.05);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(particleColors, 3)
      );
      geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader,
        fragmentShader,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.Points(geometry, material);
    };

    // Orbit Rings with reduced complexity
    const createOrbitRings = (radius, count, thickness) => {
      const group = new THREE.Group();
      
      // Reduced ring count for better performance
      const ringCount = isLowPerformance ? 2 : (isSmallScreen ? 3 : count);
      
      for (let i = 0; i < ringCount; i++) {
        const positions = [],
          colors = [],
          sizes = [];
          
        // Adjust particle count based on device
        const particleCount = isMobile && isSmallScreen ? 500 : (isLowPerformance ? 1000 : 2000);
        
        for (let j = 0; j < particleCount; j++) {
          const angle = (j / particleCount) * Math.PI * 2;
          const variation = radius + (Math.random() - 0.5) * thickness;
          const x = Math.cos(angle) * variation;
          const y = (Math.random() - 0.5) * thickness;
          const z = Math.sin(angle) * variation;
          positions.push(x, y, z);
          
          const blend = j / particleCount;
          const color = new THREE.Color().lerpColors(primaryColor, secondaryColor, blend).lerp(accentColor, 0.3);
          colors.push(color.r, color.g, color.b);
          sizes.push(Math.random() * 0.1 + 0.05);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positions, 3)
        );
        geometry.setAttribute(
          "color",
          new THREE.Float32BufferAttribute(colors, 3)
        );
        geometry.setAttribute("size", new THREE.Float32BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          uniforms: { time: { value: 0 } },
          vertexShader,
          fragmentShader,
          vertexColors: true,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });

        const ring = new THREE.Points(geometry, material);
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        group.add(ring);
      }

      return group;
    };

    // Create scene with optimized particle count
    const particles = createSpiralSphere(
      10, 
      Math.floor(getParticleCount() * 0.6), 
      [primaryColor, secondaryColor, accentColor]
    );
    scene.add(particles);

    const rings = createOrbitRings(15, 5, 0.5);
    scene.add(rings);

    // Animation with frame limiting for lower-end devices
    let lastFrameTime = 0;
    const frameInterval = isLowPerformance ? 33 : 16; // 30fps for low performance, 60fps otherwise
    
    const animate = (currentTime) => {
      if (currentTime - lastFrameTime < frameInterval) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime = currentTime;
      
      const time = currentTime * 0.001;
      
      // Update all materials with the current time
      scene.traverse((object) => {
        if (object.material && object.material.uniforms && object.material.uniforms.time) {
          object.material.uniforms.time.value = time;
        }
      });

      // Apply rotation for better performance than individual object rotation
      if (rings) {
        rings.rotation.y += isLowPerformance ? 0.0005 : 0.001;
      }

      controls.update();
      renderer.render(scene, camera);
      requestRef.current = requestAnimationFrame(animate);
    };

    // Resize handling
    const handleResize = () => {
      if (!mountRef.current) return;
      
      updateCameraAspect(camera, renderer);
      
      // Adjust camera position for smaller screens
      if (window.innerWidth < 768) {
        camera.position.z = 20;
      } else {
        camera.position.z = 15;
      }
      
      // Update fog density for better performance on small screens
      if (scene && scene.fog) {
        scene.fog.density = window.innerWidth < 768 ? 0.015 : 0.01;
      }
      
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleResize);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("resize", handleResize);
      
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Clean up THREE.js resources
      if (particles) {
        if (particles.geometry) particles.geometry.dispose();
        if (particles.material) particles.material.dispose();
      }
      
      if (rings) {
        rings.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) object.material.dispose();
        });
      }
      
      scene.clear();
      renderer.dispose();
    };
  }, [theme, prefersReducedMotion, isLowPerformance, isMobile, isSmallScreen]);

  // Create a placeholder with proper aspect ratio to prevent layout shifts
  return (
    <div 
      ref={mountRef} 
      className="w-full h-full absolute inset-0"
      aria-hidden="true"
      style={{ opacity: prefersReducedMotion ? 0.2 : 1 }}
    />
  );
};

// Lazy-loaded version of the scene
const LazyParticleScene = (props) => (
  <Suspense fallback={<div className="w-full h-full absolute inset-0 bg-gradient-to-b from-light-100 to-light-300 dark:from-dark-800 dark:to-dark-700" />}>
    <ParticleScene {...props} />
  </Suspense>
);

export default LazyParticleScene;
