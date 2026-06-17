import { useState } from 'react';
import { motion } from 'framer-motion';
import riceImg from '../assets/images/rice.png';

function FeaturedProduct() {
  const [selectedSize, setSelectedSize] = useState('10kg');
  const [quantity, setQuantity] = useState(1);
  const [buttonText, setButtonText] = useState('Order Now');

  // Pricing Logic
  const pricing = {
    '5kg': 4500,
    '10kg': 8500,
    '50kg': 40000
  };

  const currentPrice = pricing[selectedSize];
  const totalPrice = currentPrice * quantity;

  const handleOrder = () => {
    setButtonText('✓ Added to Order');
    setTimeout(() => setButtonText('Order Now'), 2000);
  };

  return (
    <section className="section featured-section">
        <div className="section-head" style={{ marginBottom: '3rem' }}>
            <p className="section-eyebrow">Deal of the Week</p>
            <h2 className="section-title">Premium Local White Rice</h2>
        </div>

        <div className="featured-inner">
            {/* Left Image Side */}
            <motion.div 
                className="featured-image-box"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.img 
                    src={riceImg} 
                    alt="Premium Local White Rice" 
                    className="featured-img"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Right Ordering Side */}
            <motion.div 
                className="featured-info-box"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="featured-rating">
                    <span>★★★★★</span>
                    <span className="rating-text">(4.9/5 from 340 reviews)</span>
                </div>
                
                <p className="featured-desc">
                    Our best-selling Nigerian local rice. Perfectly parboiled, completely stone-free, and meticulously cleaned. Elevate your Sunday rice or daily meals with grains that don't stick and taste amazing.
                </p>

                <div className="featured-divider"></div>

                {/* Size Selector */}
                <div className="order-group">
                    <h4 className="group-label">Select Bag Size</h4>
                    <div className="variant-options">
                        {['5kg', '10kg', '50kg'].map(size => (
                            <button 
                                key={size}
                                className={`variant-btn ${selectedSize === size ? 'active' : ''}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity Selector */}
                <div className="order-group">
                    <h4 className="group-label">Quantity</h4>
                    <div className="qty-selector">
                        <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                        <span className="qty-val">{quantity}</span>
                        <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </div>

                <div className="featured-divider"></div>

                {/* Price and Checkout */}
                <div className="featured-checkout">
                    <div className="price-display">
                        <span className="price-label">Total Price</span>
                        <span className="price-value">₦{totalPrice.toLocaleString()}</span>
                    </div>
                    
                    <motion.button 
                        className={`btn-primary order-massive-btn ${buttonText !== 'Order Now' ? 'success' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleOrder}
                    >
                        {buttonText}
                    </motion.button>
                </div>
                <p className="delivery-note">🚚 Free delivery on orders above ₦50,000</p>
            </motion.div>
        </div>
    </section>
  );
}

export default FeaturedProduct;
