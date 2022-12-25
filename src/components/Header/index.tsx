import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { CallIcon } from "@icon";
import { Button } from "@ui";
import seoData from "@data/seo";

import styles from "@styles/components/header.module.scss";
import Image from "next/image";

type Props = {};

const Header: NextPage<Props> = ({}) => {
  return (
    <>
      <header className={`${styles.header} container`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logo__image}>
            <Image src="/images/logo.jpeg" fill alt={`${seoData.title} Logo`} />
          </div>

          <h4 className={styles.logo__title}>{seoData.title}</h4>
        </Link>

        <Button
          href="tel:+4407426961305"
          style="dark"
          size="lg"
          className={styles.item__link}
          icon={<CallIcon />}
          text="+44 07426 961305"
        />
      </header>
    </>
  );
};

export default Header;
