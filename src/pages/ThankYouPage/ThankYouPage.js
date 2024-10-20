import React from 'react'
import './ThankYouPage.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faX} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {

  const navigate = useNavigate();

   const handleRedirect = () => {
    navigate('/'); 
  };
    return (
        <div className='thanks-container'>     
            <div className="order-placed-body">
              <h3 className='cart-heading'>Your Cart</h3>
              <hr />
              <div className='content-body'>
                <h2 className='text-font-size'>Congratulations<br />Order Placed!</h2>
                <img
                  src="/images/pot.png"
                  alt="Thank you"
                  className="thankyou-image"
                />
                <p>Thank you for choosing Chaperone services.<br />
                We will soon get in touch with you!</p>
              </div>
              <div className='btn-container'>
                <button>CONTINUE SHOPPING</button>
              </div>
              <span className='x-icon' onClick={handleRedirect}><FontAwesomeIcon icon={faX} /></span>
            </div>
          
        </div>
    )
}


export default ThankYouPage