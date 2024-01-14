import React from "react";
import styles from './Business.module.css';

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

function Business() {
  return (
    <article>
      <header>
        <img src={business.imageSrc} alt={business.title} width="300" height="300"/>
        <h3>{business.name}</h3>
      </header>
      <div className={styles.business_details}>
        <address>
          {business.address} <br />
          {business.city} <br />
          {business.state}
        </address>
        <div className={styles.details_attributes}>
          <p className={styles.attributes_category}>
            {business.category}
          </p>
          <p className={styles.attributes_rating}>
            {business.rating} stars
          </p>
          <p className={styles.attributes_reviewCount}>
            {business.reviewCount} reviews
          </p>
        </div>
      </div>
    </article>
  );
}

export default Business;