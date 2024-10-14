import React from 'react';
import styles from './OurStory.module.css';
import {Patio} from './images/imagerepository';

const OurStory = () => {
  return (
    <div className={styles.storyContainer}>
      <div className={styles.storyContent}>
        <header className={styles.storyHeader}>
          <h1 className={styles.storyTitle}>Our Story</h1>
          <p className={styles.storySubtitle}>A journey of passion, flavor, and community</p>
        </header>
        <div className={styles.storyBody}>
          <img src={Patio} alt="Restaurant interior" className={styles.storyImage} />
          <div className={styles.storyText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className={styles.founderSection}>
            <img src="/api/placeholder/150/150" alt="Founder" className={styles.founderImage} />
            <div className={styles.founderInfo}>
              <h3 className={styles.founderName}>John Doe</h3>
              <p className={styles.founderTitle}>Founder & Head Chef</p>
              <p className={styles.founderQuote}>"Cooking is not just about ingredients, it's about bringing people together and creating memories."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;