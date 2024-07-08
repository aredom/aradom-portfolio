"use client"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faEdit, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section className="py-16 bg-gray-100" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-12">
          Have a question or want to work together? Drop me a message!
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 pl-10 border-b-2 border-gray-300 focus:border-blue-500 transition duration-300 outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 pl-10 border-b-2 border-gray-300 focus:border-blue-500 transition duration-300 outline-none"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="mt-6 relative">
            <FontAwesomeIcon icon={faEdit} className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 pl-10 border-b-2 border-gray-300 focus:border-blue-500 transition duration-300 outline-none"
              placeholder="Subject"
              required
            />
          </div>
          <div className="mt-6">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded focus:border-blue-500 transition duration-300 outline-none"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="mt-8 text-center">
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}