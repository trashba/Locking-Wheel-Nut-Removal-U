import type { ReactNode } from "react";
import type { NextPage } from "next";

import Header from "@components/Header";
import Footer from "@components/Footer";

import styles from "@styles/components/main_layout.module.scss";

type Props = {
  children?: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
