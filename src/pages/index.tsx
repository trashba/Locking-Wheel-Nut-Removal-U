import type { GetStaticPropsContext, NextPage } from "next";

import Layout from "@components/Layout/Main";
import Seo from "@components/Seo";
import Landing from "@components/Landing";
import ContactUs from "@components/Contact";
import Gallery from "@components/Gallery";

import styles from "@styles/pages/home.module.scss";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Seo />

      <div className={styles.container}>
        <Landing />

        <Gallery />

        <ContactUs />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => ({
  props: {},
});

export default HomePage;
