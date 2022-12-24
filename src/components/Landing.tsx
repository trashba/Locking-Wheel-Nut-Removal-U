import React from "react";

import Map from "@components/Map";

import styles from "@styles/components/landing.module.scss";
import Button from "./UI/Button";
import { CallIcon } from "@icon";
import seoData from "@data/seo";

const Landing = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h1>Mobile {seoData.title}</h1>

      <p>
        Our prompt and courteous mobile locking wheel nut removal service is
        available in a variety of places, including:
        <br />
        <strong>East London,</strong> <strong>Essex,</strong>{" "}
        <strong>Cambridgeshire,</strong> <strong>Kent,</strong>{" "}
        <strong>South East,</strong> <strong>And many more.</strong>
        <br />
        <span>GUARANTEED SUCCESSFUL REMOVAL OR NO CHARGE.</span>
        <br />
        Make a call on 07426 961305 to get back on the road right away!
      </p>

      <div className={styles.actions}>
        <Button href="/#contact" text="Contact Us" size="xl" style="gray" />

        <Button
          href="tel:+4407426961305"
          text="+44 07426 961305"
          size="xl"
          style="dark"
          icon={<CallIcon />}
        />
      </div>
    </div>
  );
};

export default Landing;
