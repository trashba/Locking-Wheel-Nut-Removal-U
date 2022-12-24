import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { BarsIcon, LogoIcon, UserAddIcon, UserIcon } from "@icon";
import { Button, Drawer } from "@ui";
import seoData from "@data/seo";

import styles from "@styles/components/header.module.scss";

type Props = {};

const Header: NextPage<Props> = ({}) => {
  const [drawer, setDrawer] = useState<boolean>(false);

  const navigation: {
    title: string;
    url: string;
    visible?: boolean;
    icon?: JSX.Element;
  }[] = [
    {
      title: "Home",
      url: "/",
      icon: <UserIcon />,
    },
    {
      title: "Gallery",
      url: "/#gallery",
      icon: <UserAddIcon />,
    },
    {
      title: "Testimonials",
      url: "/#testimonials",
      icon: <UserAddIcon />,
    },
    {
      title: "Contact",
      url: "/#contact",
      icon: <UserAddIcon />,
    },
    {
      title: "Customers Stories",
      url: "/#contact",
      icon: <UserAddIcon />,
    },
  ];

  return (
    <>
      <header className={`${styles.header} container`}>
        <Link href="/" className={styles.logo}>
          <h4 className={styles.logo__title}>{seoData.title}</h4>
        </Link>

        <nav className={styles.header__nav}>
          <ul className={styles.nav__list}>
            {navigation
              .filter(({ visible }) => visible)
              .map(({ title, url, icon }, index) => (
                <li key={index} className={styles.list__item}>
                  <Button
                    href={url}
                    style="light"
                    className={styles.item__link}
                    text={title}
                    icon={icon}
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
            <LogoIcon />

            <h4 className={styles.logo__title}>{seoData.title}</h4>
          </Link>

          <nav className={styles.header__nav}>
            <ul className={styles.nav__list}>
              {navigation
                .filter(({ visible }) => visible)
                .map(({ title, url, icon }, index) => (
                  <li key={index} className={styles.list__item}>
                    <Button
                      href={url}
                      style="light"
                      className={styles.item__link}
                      text={title}
                      icon={icon}
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
