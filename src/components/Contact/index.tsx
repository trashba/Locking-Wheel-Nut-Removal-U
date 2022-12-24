import React from "react";

import Map from "@components/Map";

import styles from "@styles/components/contact.module.scss";

const ContactUs = () => {
  return (
    <div className={`container ${styles.container}`}>
      <a href="#contact">Contact us</a>

      <h2>Our locations</h2>

      <p>Come visit our team at one of our garage.</p>

      <Map />
    </div>
  );
};

export default ContactUs;
