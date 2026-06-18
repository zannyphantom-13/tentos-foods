import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      {/* Top Bar - Disappears on scroll */}
      <div className={`top-bar ${isScrolled ? 'hidden' : ''}`}>
        <div className="top-bar-container">
            <div className="top-bar-left">
                <span>📞 +234 801 234 5678</span>
                <span>✉️ hello@tentosfoods.com</span>
            </div>
            <div className="top-bar-right">
                <a href="#">Track Order</a>
                <a href="#">Help & FAQs</a>
                <div className="social-links">
                    <a href="#">FB</a>
                    <a href="#">IG</a>
                    <a href="#">TW</a>
                </div>
            </div>
        </div>
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo" aria-label="Tentos Foods Home">
            <div className="logo-badge">👨‍🍳</div>
            <div className="logo-text">
              <span className="logo-tentos">Tentos</span>
              <span className="logo-foods">foods</span>
              <span className="logo-variety">• variety •</span>
            </div>
          </Link>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/deals">Deals</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="nav-actions">
            <button 
              className="icon-btn" 
              id="search-toggle" 
              aria-label="Search"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            
            <Link to="/login" className="icon-btn" aria-label="Account">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </Link>
            
            <button className="cart-btn" id="cart-btn" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <span className="cart-count" id="cart-count">{cartCount}</span>
            </button>
            <Link to="/products" className="order-btn">Shop Now</Link>
          </div>

          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            id="hamburger" 
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>

        {/* Search Drop */}
        <div className={`search-bar-drop ${isSearchOpen ? 'open' : ''}`} id="search-bar-drop">
          <div className="search-inner">
            <select className="search-cat" id="search-category" aria-label="Category">
              <option>All Categories</option>
              <option>Rice &amp; Grains</option>
              <option>Beans &amp; Legumes</option>
              <option>Cooking Oils</option>
              <option>Spices &amp; Seasonings</option>
              <option>Tomatoes &amp; Peppers</option>
              <option>Fish &amp; Seafood</option>
              <option>Tubers &amp; Roots</option>
              <option>Flour &amp; Starch</option>
            </select>
            <input type="search" className="search-input" id="main-search" placeholder="Search rice, beans, palm oil, spices…" autoComplete="off" />
            <button className="search-go" id="search-btn" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
