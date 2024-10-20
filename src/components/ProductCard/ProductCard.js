import React,{useState} from 'react';
import './ProductCard.css';
import AddToCartModal from '../AddToCartModal/AddToCartModal';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";


const ProductCard = ({ products }) => {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRedirect = () => {
    navigate('/thank-you'); 
  };

  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} >
          <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
                <p className="view-product-text" onClick={handleRedirect}>View Product</p>
                <span className="heart-icon"><CiHeart /></span>                
            </div>
          </div>
          <div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            
                <p className="product-rating">⭐⭐⭐⭐⭐ {product.rating}</p>
                <p className="product-price">₹ {product.price}</p>
            
            <div className="product-actions">
              <button className="btn add-to-cart" onClick={handleToggle}>
                <FaPlus className="icon-left" />
                  Add to Cart
                <FaMinus className="icon-right" />
              </button>

              <button className="btn buy-on-rent">Buy on Rent</button>
            </div>
          </div>
          {isModalOpen && (
        <AddToCartModal isOpen={isModalOpen} onClose={handleToggle}>
          <h1>Add to Cart</h1>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹ {product.price}</p>
          
            <button className='confirm-btn'>Confirm</button>
            <button onClick={handleToggle}>Close</button>
          
        </AddToCartModal>
      )}

          
          
        </div>
      ))}
      
    </div>
  );
};

export default ProductCard;
