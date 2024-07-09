import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Aradom Leake</h3>
            <p className="text-gray-400">Web Developer & Designer</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg mb-2">Find me on</p>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AradomL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;