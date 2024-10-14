import React, { useState } from 'react';
import styles from './Header.module.css';
import { TwoCharlies } from './images/imagerepository'
import { Menu, X } from 'lucide-react';

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOrderNow = () => {
    // Replace 'YOUR_DOORDASH_URL' with the actual DoorDash URL for your restaurant
    window.open('YOUR_DOORDASH_URL', '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <button 
          className={styles.logoButton} 
          onClick={() => handleNavClick('home')}
          aria-label="Go to home page"
        >
          <img src={TwoCharlies} alt="Two Charlies Logo" className={styles.logoImage} />
        </button>
        <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li>
              <button 
                onClick={() => handleNavClick('menu')} 
                className={styles.navButton}
              >
                Menu
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('our-story')} 
                className={styles.navButton}
              >
                Our Story
              </button>
            </li>
            <li>
              <button onClick={handleOrderNow} className={styles.orderButton}>Order Now</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;