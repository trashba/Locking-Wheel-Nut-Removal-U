import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "@styles/components/gallery.module.scss";

const Gallery = () => (
  <div className={[styles.wrapper, "container"].join(" ")}>
    <a href="#gallery">Gallery</a>

    <h2>Our Work Gallery</h2>

    <Carousel className={styles.gallery}>
      {Array.from(
        { length: 30 },
        (_, index) => `/images/example-${index}.png`
      ).map((item, index) => (
        <div key={index} className={styles.item}>
          <Image src={item} fill alt="Gallery Image" className={styles.image} />
        </div>
      ))}
    </Carousel>
  </div>
);
export default Gallery;
