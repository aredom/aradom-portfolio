'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMobileAlt, faSearch, faEdit } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8  text-center">
          <ServiceItem
            icon={faLaptopCode}
            title="Web Design"
            description="Create stunning, responsive websites that captivate your audience and drive engagement."
          />
          <ServiceItem
            icon={faMobileAlt}
            title="App Development"
            description="Build powerful, user-friendly mobile applications for iOS and Android platforms."
          />
          <ServiceItem
            icon={faSearch}
            title="SEO Optimization"
            description="Boost your online visibility and drive organic traffic with our expert SEO strategies."
          />
          <ServiceItem
            icon={faEdit}
            title="Content Creation"
            description="Craft compelling, SEO-friendly content that resonates with your target audience."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <div className="text-4xl text-blue-500 mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}