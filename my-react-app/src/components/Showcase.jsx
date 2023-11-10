import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Showcase = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="show flex items-center justify-center">
      <div className="bg-black/50 w-full p-5 text-center" data-aos="flip-right">
        <h1 className="text-purple-200 text-3xl" data-aos="zoom-out-right">
          Shop,<span className="text-orange-500 text-2xl"> Smile </span>, Repeat
        </h1>

        <p className="text-white fa-bold py-8 px-8">
          With Vroom Your Gateway to Endless Adventures. <br /> Unleash Your
          Imagination and Let the Journey Begin!
        </p>
        <Link to="/Services">
          <button className="py-4 px-5 lg:w-[15%] uppercase space-x-4 rounded-lg bg-slate-200" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Showcase;
