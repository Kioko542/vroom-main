import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos'
import 'aos/dist/aos.css'


  
const Cart = ({ cart, setCart, setCartQuantity }) => {
  const increaseQuantity = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
    setCartQuantity((prevQuantity) => prevQuantity + 1);
  };
  useEffect(()=>{
    AOS.init({duration: 2000})
      },[])
    
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCart(updatedCart);
      setCartQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    setCartQuantity((prevQuantity) => prevQuantity - item.quantity);
  };

  useEffect(() => {
    // Store the cart data in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(()=>{
    AOS.init({duration: 2000})
      },[])
  return (
    <div id="cart" className="p-4 bg-yellow-300 w-full text-black my-4">
      <div className="flex justify-center items-center">
        <h2 className="text-3xl text-center border-b-2 pb-2 mb-4">Cart</h2>
      </div>
      <div className="content flex justify-evenly items-center gap-4 flex-row bg-green-300/50 py-4">
        <p className="text-black px-4 text-2xl">Total Items: {cart.length}</p>
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover mt-5 md:mr-4"
              />
              <div className="flex flex-col">
                <p className="py-4 text-[18px]">
                  {item.title} - ${item.price} - Quantity: {item.quantity}
                </p>

                <div className="flex mt-4">
                  <button
                    className="bg-black text-white py-2 px-3 rounded hover:bg-blue-600"
                    onClick={() => {
                      increaseQuantity(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <span className="mx-2">{item.quantity || 1}</span>
                  <button
                    className="bg-black shadow-xl text-white py-2 px-3 rounded hover-bg-blue-600"
                    onClick={() => {
                      decreaseQuantity(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <button
                    className="bg-red-500 text-white py-2 px-3 mx-auto rounded hover:bg-red-600"
                    onClick={() => {
                      removeFromCart(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetch products and categories from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setCartQuantity((prevQuantity) => prevQuantity + quantity);
    window.alert("Item added to the cart.");
    scrollToCartSection();
  };

  const filterProductsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToCartSection = () => {
    const cartSection = document.getElementById("cart");
    if (cartSection) {
      window.scrollTo({
        top: cartSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Load the cart data from local storage on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    setCartQuantity(
      storedCart.reduce((total, item) => total + item.quantity, 0)
    );
  }, [setCart, setCartQuantity]);

  return (
    <div className="container mx-auto w-full bg-green-200/50 py-6 text-slate-600">
      <div className="flex flex-col md:flex-row justify-between my-3 p-8">
        <div className="w-full md:w-1/4 h-[50%] p-4 bg-yellow-400 my-6 sticky " 
       data-aos="zoom-out-down" data-aos-duration="3000">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul>
            <li
              className={`py-3 cursor-pointer ${
                !selectedCategory ? "font-bold" : ""
              }`}
              onClick={() => filterProductsByCategory("")}
            >
              All
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className={`py-3 hover:border-b-4 text-white border-black cursor-pointer ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
                onClick={() => filterProductsByCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-3/4 p-4 flex gap-4 flex-wrap" >
          {filteredProducts.map((product) => (
            <div className="w-full md:w-[300px] p-4 border rounded-lg shadow-md m-4" data-aos="fade-up-right" >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] object-cover mb-2 rounded"
              />
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <div className="flex items-center mb-2">
                <select
                  className="bg-white border rounded py-1 px-2 mr-2"
                  onChange={(e) => addToCart(product, parseInt(e.target.value))}
                >
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                <button
                  className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-600"
                  onClick={() => addToCart(product, 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-10 right-10">
          <button
            onClick={scrollToTop}
            className="bg-black text-white py-2 px-4 rounded-full hover:bg-orange-300"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>
      )}

      <Cart cart={cart} setCart={setCart} setCartQuantity={setCartQuantity} />
    </div>
  );
};

export default Products;
