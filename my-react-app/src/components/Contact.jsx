import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful form submission
    setSubmitted(true);

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Display success message or navigate to a thank-you page
    alert('Thank you for contacting us!');
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    return (
    <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <div>
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <div className='cont-img h-full shadow-xl p-[50px] flex justify-center items-center '>
          <div className="text1">
            <p className=' text-white bg-black text-center p-4'> <span>Have a question,</span> feedback, or just want to say <span>hello?</span></p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Send us a message:</h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Send Message
          </button>
          <p className='text-[14px] text-center mt-3'> We'd love to hear from you! Feel free to reach out using the contact information below or use the provided form for a quick and convenient way to get in touch.</p>

        </form>

        {submitted && (
          <div className="mt-4 text-green-600">
            Thank you for contacting us! We'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
