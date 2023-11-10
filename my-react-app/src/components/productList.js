import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
const ProductCard = ({ product }) => (
  <div className="w-64 max-w-xs rounded   p-4 overflow-hidden shadow-lg">
   <Link to="/Services" >
           
    <div className="img-pr">
    <img
      className="w-full h-40 object-cover object-center "
      src={product.image}
      alt={product.title}
    />
    </div>
   
    <div className="px-6 py-4 cursor-pointer">
      <div className="text- mb-2">{product.title}</div>
      <p className='mt-3 text-orange-600'>{product.category}</p>
      <p className="text-blue-400 fa-bold text-base mt-3">${product.price}</p>
      <Link to="/Services">
          <button className="py-4 px-5 my-3 mx-auto  rounded-lg bg-slate-200 hover:bg-red-200">
         shop now
          </button>
        </Link>
    </div>
   
</Link>
  </div>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []);
  useEffect(()=>{
    AOS.init({duration: 2000})
      },[])
  return (
    <div  >
      <h2 className="text-4xl  mt-6 mb-4 text-center">Our Products</h2>
      <div className="grid mx-[100px]  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-lg shadow-xl" data-aos="fade-left">
        {products.map(product => (
          <ProductCard  key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
