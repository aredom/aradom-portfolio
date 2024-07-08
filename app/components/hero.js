import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const TypedText = dynamic(() => import('./TypedText'), { ssr: false });

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/images/my-profile.jpg" 
              alt="Aradom Leake" 
              width={250} 
              height={250} 
              className="rounded-full mx-auto md:mx-0"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Aradom Leake</h1>
            <div className="h-8 mb-4">
              <TypedText strings="Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer" />
            </div>
            <p className="text-xl mb-6">Turning ideas into reality through code and design.</p>
            
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-300 hover:text-white w-6 h-6" />
              <FontAwesomeIcon icon={faFacebookF} className="text-gray-300 hover:text-white w-6 h-6" />
              <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-300 hover:text-white w-6 h-6" />
              <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-white w-6 h-6" />
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/Aradom_Leake_CV.pdf" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300">
                Download CV
              </Link>
              <Link href="#contact" className="bg-transparent hover:bg-white hover:text-gray-800 text-white px-6 py-3 rounded-full border-2 border-white transition duration-300">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}