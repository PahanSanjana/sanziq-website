import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const TeamCard = ({ name, role, image, initials, social }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
      <div className="mx-auto w-24 h-24 rounded-full border-4 border-blue-600 p-1 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="rounded-full object-cover w-full h-full"
          />
        ) : (
          <div className="bg-gradient-to-br from-blue-600 to-gray-900 flex items-center justify-center w-full h-full text-white text-2xl font-bold">
            {initials}
          </div>
        )}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{role}</p>
      <div className="mt-3 flex justify-center space-x-4 text-gray-600 dark:text-gray-300">
        {social?.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-600" />
          </a>
        )}
        {social?.github && (
          <a href={social.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-blue-600" />
          </a>
        )}
        {social?.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-600" />
          </a>
        )}
        {social?.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-blue-600" />
          </a>
        )}
        {social?.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-pink-500" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
