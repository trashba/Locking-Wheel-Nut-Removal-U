import React from "react";
import type { NextPage } from "next";

import styles from "@styles/components/footer.module.scss";

type Props = {
  className?: string;
};

const Footer: NextPage<Props> = ({ className = "" }) => {
  return (
    <footer className={`${styles.footer} ${className} container`}>
      <p>5 Emerald Gardens, Dagenham RM8 1LH, United Kingdom</p>
    </footer>
  );
};

export default Footer;
