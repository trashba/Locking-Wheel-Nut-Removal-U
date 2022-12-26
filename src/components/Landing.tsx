import React from "react";

import Map from "@components/Map";

import styles from "@styles/components/landing.module.scss";
import Button from "./UI/Button";
import { CallIcon, PinIcon } from "@icon";
import seoData from "@data/seo";

const Landing = () => {
  return (
    <div className={`container ${styles.container}`}>
      <h1>Mobile {seoData.title}</h1>

      <p>
        Have you lost your locking wheel nut key? Or is it broken or damaged?
        <br />
        Has a mechanic already tried to remove it, maybe by drilling, and
        failed?
        <br />
        Then we can help.
        <br />
        Our fast and friendly mobile locking wheel nut removal service covers:
        <br />
        *East London
        <br />
        *Essex
        <br />
        *Cambridgeshire
        <br />
        *Kent
        <br />
        *south east
        <br />
        *And many other locations <br />
        We can remove all four of your locking wheel nuts in around 10 to 15
        minutes, and replace them with high quality standard wheel nuts or bolts
        if required.
        <br />
        <span>SUCCESSFUL REMOVAL GUARANTEED OR NO CHARGE.</span>
        <br />
        <a href="tel:+4407426961305">Call 07426 961305</a> and get yourself back
        on the road today!
      </p>

      <div className={styles.actions}>
        <Button
          href="/#contact"
          text="Contact Us"
          size="xl"
          style="gray"
          icon={<PinIcon />}
        />

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
