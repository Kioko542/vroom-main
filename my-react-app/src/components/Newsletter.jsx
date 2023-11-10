import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const NewsletterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      console.log('Submitting:', values);

      Swal.fire({
        title: 'Subscription Successful!',
        text: 'Thank you for subscribing!',
        icon: 'success',
      });

      // Clear the form
      formik.resetForm();
    },
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-xl rounded-md" data-aos="fade-right">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <form onSubmit={formik.handleSubmit} >
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

const CatchyText = () => {
  return (
    <div className="text-center mt-8" data-aos="fade-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="3500">
      <p className="text-2xl font-bold">Stay in the Loop!</p>
      <p className="text-yellow-800 text-2xl mt-5">Subscribe to our newsletter for exclusive updates, offers, and more.</p>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div>
        <NewsletterForm />
        <CatchyText />
      </div>
    </div>
  );
};

export default Newsletter;
