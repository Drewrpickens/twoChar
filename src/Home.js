import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import styles from './Home.module.css';
import { test, Truffle, steak, Lobster} from './images/imagerepository'

const Home = ({ setCurrentPage }) => {
  const handleOrderNow = () => {
    // Replace 'YOUR_DOORDASH_URL' with the actual DoorDash URL for your restaurant
    window.open('YOUR_DOORDASH_URL', '_blank');
  };

  const dishes = [
    { name: 'Truffle Risotto', image: Truffle },
    { name: 'Wagyu Steak', image: steak },
    { name: 'Lobster Thermidor', image: Lobster }
  ];

  const happyHourData = [
    { day: "Monday", special: "$2.00 domestic drafts" },
    { day: "Tuesday", special: "$5 double deep eddy vodkas" },
    { day: "Wednesday", special: "$3 crown and down" },
    { day: "Thursday", special: "$2.50 domestic drafts $2.50 wells" },
    { day: "Friday", special: "$2.50 fancy pants & grape sodas" },
    { day: "Saturday", special: "$3 crown and down" },
    { day: "Sunday", special: "Happy Hour All Day! $3 bloody mary's and mimosas" },
  ];

  return (
    <div>
      <div 
        className={styles.hero}
        style={{
          backgroundImage: `url(${test})`,
          height: '750px',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Two Charlies</h1>
          <p className={styles.heroSubtitle}>Denton's Favorite Neighborhood Bar and Grill! Stop by Two Charlies Today for great food, great drinks, and a friendly atmosphere!</p>
          <div className={styles.heroButtons}>
            <button className={styles.orderButton} onClick={handleOrderNow}>Order Now</button>
            <button className={styles.exploreButton} onClick={() => setCurrentPage('menu')}>Explore Our Menu</button>          </div>
        </div>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <Clock className={styles.infoIcon} size={24} />
            <div className={styles.infoText}>
              <h3>Opening Hours</h3>
              <p>Mon-Sun: 12pm-2am</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <MapPin className={styles.infoIcon} size={24} />
            <div className={styles.infoText}>
              <h3>Location</h3>
              <p>809 Sunset St,</p>
              <p> Denton, TX 76201</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <Phone className={styles.infoIcon} size={24} />
            <div className={styles.infoText}>
              <h3>Reservations</h3>
              <p>+1 (940) 891-1100</p>
              <p>info@gourmethaven.com</p>
            </div>
          </div>
        </div>
        {/* <button className={styles.reserveButton} onClick={() => setCurrentPage('reservation')}>
          Reserve a Table
        </button> */}
      </div>

      <div className={styles.happyHourSection}>
        <h2 className={styles.sectionTitle}>Happy Hour Specials</h2>
        <div className={styles.happyHourGrid}>
          {happyHourData.map((item, index) => (
            <div key={index} className={styles.happyHourItem}>
              <h3 className={styles.happyHourDay}>{item.day}</h3>
              <p className={styles.happyHourSpecial}>{item.special}</p>
            </div>
          ))}
        </div>
        <div className={styles.dailyHappyHour}>
          <h3>Daily Happy Hour 4-7</h3>
        </div>
      </div>

      <div className={styles.featuredDishes}>
        <h2 className={styles.sectionTitle}>Our Signature Dishes</h2>
        <div className={styles.dishGrid}>
          {dishes.map((dish, index) => (
            <div key={index} className={styles.dishCard}>
              <img src={dish.image} alt={dish.name} className={styles.dishImage} />
              <div className={styles.dishInfo}>
                <h3 className={styles.dishTitle}>{dish.name}</h3>
                <p className={styles.dishDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.testimonial}>
        <div className={styles.testimonialContent}>
          <p className={styles.testimonialText}>"An unforgettable dining experience! The flavors were exquisite and the service was impeccable. Gourmet Haven has become our new favorite restaurant."</p>
          <p className={styles.testimonialAuthor}>- Jane Doe, Food Critic</p>
        </div>
      </div>
    </div>
  );
};

export default Home;