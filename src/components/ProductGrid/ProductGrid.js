import React,{useState} from 'react';
import './ProductGrid.css'; // Import the CSS file
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus,faMinus,faHeart } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ products }) => {

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRedirect = () => {
    navigate('/thank-you'); // Specify the path you want to redirect to
  };

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
                <p className="view-product-text" onClick={handleRedirect}>View Product</p>
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
          <h1>Add to Cart</h1>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹ {product.price}</p>
          
            <button className='confirm-btn'>Confirm</button>
            <button onClick={handleToggle}>Close</button>
          
        </Modal>
      )}

          
          
        </div>
      ))}
      
    </div>
  );
};

export default ProductGrid;
