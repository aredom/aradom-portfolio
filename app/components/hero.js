import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TypedText = dynamic(() => import('./TypedText'), { ssr: false });

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between md:px-20">
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
            <div className="h-8 mb-4 text-blue-500 font-bold">
              <TypedText strings="Web Developer, Full Stack Developer, Web Designer, Apps Designer, Apps Developer" />
            </div>
            <p className="text-xl mb-6">Turning ideas into reality through code and design.</p>
            
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <Link href="#">
                <FontAwesomeIcon icon={faTwitter} className="text-gray-300 hover:text-white w-6 h-6" />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faFacebookF} className="text-gray-300 hover:text-white w-6 h-6" />
              </Link>
              <Link href="https://wa.me/+251940677928" target="blank">
                <FontAwesomeIcon icon={faWhatsapp} className="text-gray-300 hover:text-white w-6 h-6" />
              </Link>
              <Link href="https://t.me/AradomL" target='blank'>
                <FontAwesomeIcon icon={faTelegram} className="text-gray-300 hover:text-white w-6 h-6" />
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Update the Link to point to the CV file in the public folder */}
              <Link href="/Aradom-Leake-CV.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300">
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
