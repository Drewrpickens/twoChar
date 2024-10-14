import React, { useState } from 'react';
import styles from './Header.module.css';
import { TwoCharlies } from './images/imagerepository'
import { Menu, X } from 'lucide-react';

const Header = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOrderNow = () => {
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
        <a href="#" className={styles.logo} onClick={() => handleNavClick('home')}>
          <img src={TwoCharlies} alt="Two Charlies Logo" className={styles.logoImage} />
        </a>
        <button className={styles.mobileMenuButton} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul>
            <li>
              <a href="#" onClick={() => handleNavClick('menu')} className={styles.navLink}>Menu</a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavClick('our-story')} className={styles.navLink}>Our Story</a>
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