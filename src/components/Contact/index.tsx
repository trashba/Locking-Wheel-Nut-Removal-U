import React from "react";

import Map from "@components/Map";

import styles from "@styles/components/contact.module.scss";
import { PinIcon } from "@icon";

const ContactUs = () => {
  return (
    <div className={`container ${styles.container}`}>
      <p id="contact">Contact us</p>

      <h2>Our locations</h2>

      <p>
        <a href="https://maps.app.goo.gl/kD3JWZVBBCL2ZwkE8" target="_blank">
          <PinIcon /> 5 Emerald Gardens, Dagenham RM8 1LH, United Kingdom
        </a>
      </p>

      <Map />
    </div>
  );
};

export default ContactUs;
