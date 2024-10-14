import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import OurStory from './OurStory';
import Reservation from './Reservation';
import styles from './App.module.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'menu':
        return <Menu setCurrentPage={setCurrentPage} />;
      case 'our-story':
        return <OurStory />;
      case 'reservation':
        return <Reservation />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={styles.container}>
      <Header setCurrentPage={setCurrentPage} />
      <main className={styles.main}>
        {renderPage()}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Gourmet Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;