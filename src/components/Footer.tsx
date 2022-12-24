import React from "react";
import type { NextPage } from "next";

import { CallIcon, PinIcon } from "@icon";

import styles from "@styles/components/footer.module.scss";

type Props = {
  className?: string;
};

const Footer: NextPage<Props> = ({ className = "" }) => {
  return (
    <footer className={`${styles.footer} ${className} container`}>
      <a href="https://maps.app.goo.gl/kD3JWZVBBCL2ZwkE8" target="_blank">
        <PinIcon /> 5 Emerald Gardens, Dagenham RM8 1LH, United Kingdom
      </a>
      <a href="tel:+4407426961305">
        <CallIcon /> +44 07426 961305
      </a>
    </footer>
  );
};

export default Footer;
