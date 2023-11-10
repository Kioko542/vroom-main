import React, { useEffect } from 'react';
import aboutImage from '../images/about1.jpg'; 
import missionImage from '../images/about2.jpg'; 
import chooseUsImage from '../images/Login.jpg'; 
import AOS from 'aos'
import 'aos/dist/aos.css'
const AboutPage = () => {
  
  useEffect(()=>{
    AOS.init({duration: 2000})
      },[])
    
  return (
    <div className="bg-gray-100 min-h-screen flex flex-row gap-10 justify-center items-center">

      <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
        <div className="about-us flex flex-row gap-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <img src={aboutImage} alt="About Us" className="mb-4 rounded-md shadow-md w-full h-48 object-cover" />
          <div className="abt-txt px-4">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-800 mt-6">
              Welcome to Vroom, your go-to destination for high-quality products and exceptional service. We are passionate about providing you with the best shopping experience, offering a wide range of products carefully curated to meet your needs.
            </p>
          </div>
        </div>

        <div className="mission flex gap-5 mt-[130px]" data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
          <img src={missionImage} alt="Our Mission" className="mb-4 rounded-md shadow-md w-full h-48 object-cover" />
          <div className="mid">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-800 mb-6">
              Our mission is to enrich your life by providing you with high-quality products that bring joy, comfort, and style. We aim to create a seamless shopping experience, ensuring that you find exactly what you're looking for.
            </p>
          </div>
        </div>

        <div className="choose-us flex flex-wrap gap-5 mt-[150px]" data-aos="zoom-out-right" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
          <img src={chooseUsImage} alt="Why Choose Us" className="mb-4 rounded-md shadow-md w-full h-[50vh] object-cover" />
          <div className="con3">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-800 mb-6">
              - Curated Selection: We carefully curate our product selection to bring you the latest trends and timeless classics.
            </p>
            <p className="text-gray-800 mb-6">
              - Quality Assurance: We prioritize quality to ensure that every product meets our standards of excellence.
            </p>
            <p className="text-gray-800 mb-6">
              - Customer-Centric Approach: Your satisfaction is our top priority. Our dedicated support team is here to assist you at every step.
            </p>
          </div>
        </div>

        <div className="conta bg flex flex-col mt-5 justify-center items-center bg-slate-100" data-aos="fade-up"
     data-aos-duration="3000"> 
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-800 mb-6">
            Have questions or feedback? We'd love to hear from you! Contact our support team at support@yourcompany.com or call us at (123) 456-7890.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
