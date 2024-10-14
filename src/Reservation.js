import React, { useState } from 'react';
import styles from './Reservation.module.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Here you would typically send the data to a server
    setIsSubmitted(true);
  };

  return (
    <div className={styles.reservationContainer}>
      <div className={styles.reservationContent}>
        <header className={styles.reservationHeader}>
          <h1 className={styles.reservationTitle}>Reserve a Table</h1>
          <p className={styles.reservationSubtitle}>Join us for an unforgettable dining experience</p>
        </header>
        <form onSubmit={handleSubmit} className={styles.reservationForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="date" className={styles.label}>Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="time" className={styles.label}>Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="guests" className={styles.label}>Number of Guests</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={styles.select}
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="occasion" className={styles.label}>Occasion (Optional)</label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className={styles.input}
              placeholder="e.g., Birthday, Anniversary"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Reserve Now
          </button>
        </form>
        {isSubmitted && (
          <div className={styles.successMessage}>
            Your reservation has been successfully submitted. We look forward to seeing you!
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;