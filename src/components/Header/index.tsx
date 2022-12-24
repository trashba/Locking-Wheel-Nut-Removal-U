import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { BarsIcon, UserAddIcon, UserIcon } from "@icon";
import { Button, Drawer } from "@ui";
import seoData from "@data/seo";

import styles from "@styles/components/header.module.scss";
import ExportedImage from "next-image-export-optimizer";

type Props = {};

const Header: NextPage<Props> = ({}) => {
  const [drawer, setDrawer] = useState<boolean>(false);

  const navigation: {
    title: string;
    url: string;
    visible?: boolean;
  }[] = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Gallery",
      url: "/#gallery",
    },
    {
      title: "Testimonials",
      url: "/#testimonials",
    },
    {
      title: "Contact",
      url: "/#contact",
    },
    {
      title: "Customers Stories",
      url: "/#contact",
    },
  ];

  return (
    <>
      <header className={`${styles.header} container`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logo__image}>
            <ExportedImage
              src="/images/logo.jpeg"
              alt={`${seoData.title} Logo`}
              layout="fill"
              objectFit="contain"
            />
          </div>

          <h4 className={styles.logo__title}>{seoData.title}</h4>
        </Link>

        <nav className={styles.header__nav}>
          <ul className={styles.nav__list}>
            {navigation.map(({ title, url }, index) => (
              <li key={index} className={styles.list__item}>
                <Button
                  href={url}
                  style="light"
                  className={styles.item__link}
                  text={title}
                />
              </li>
            ))}
          </ul>

          <Button
            icon={<BarsIcon />}
            className={styles.drawer_btn}
            onClick={() => setDrawer((prevState) => !prevState)}
            ariaLabel="Drawer Sutton"
            style="light"
          />
        </nav>
      </header>

      <Drawer visible={drawer} setVisible={setDrawer}>
        <div className={styles.modal_content}>
          <Link href="/" className={styles.logo}>
            <h4 className={styles.logo__title}>{seoData.title}</h4>
          </Link>

          <nav className={styles.header__nav}>
            <ul className={styles.nav__list}>
              {navigation.map(({ title, url }, index) => (
                <li key={index} className={styles.list__item}>
                  <Button
                    href={url}
                    style="light"
                    className={styles.item__link}
                    text={title}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
