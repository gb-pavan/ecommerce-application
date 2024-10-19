import React,{useState} from 'react';
import './ProductGrid.css'; // Import the CSS file
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus,faMinus,faHeart } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';

const ProductGrid = ({ products }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} >
          {/* <div className="product-image">
            <img src={product.image} alt={product.name} />
            <p>View Product</p>
          </div> */}
          <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
                <p className="view-product-text">View Product</p>
                <span className="heart-icon"><FontAwesomeIcon icon={faHeart} /></span>
                
            </div>
          </div>
          <div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            
                <p className="product-rating">⭐⭐⭐⭐⭐ {product.rating}</p>
                <p className="product-price">₹ {product.price}</p>
            
            <div className="product-actions">
              <button className="btn add-to-cart" onClick={handleToggle}>
                <FontAwesomeIcon icon={faPlus} className="icon-left" />
                  Add to Cart
                <FontAwesomeIcon icon={faMinus} className="icon-right" />
              </button>

              <button className="btn buy-on-rent">Buy on Rent</button>
            </div>
          </div>
          {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleToggle}>
          <h2>Modal Title</h2>
          <p>This is the modal content!</p>
          <button onClick={handleToggle}>Close</button>
        </Modal>
      )}

          
          
        </div>
      ))}
      
    </div>
  );
};

export default ProductGrid;
