import type { GetStaticPropsContext, NextPage } from "next";

import Layout from "@components/Layout/Main";
import Seo from "@components/Seo";
import Landing from "@components/Landing";
import ContactUs from "@components/Contact";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Seo />

      <Landing />

      <ContactUs />
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => ({
  props: {},
});

export default HomePage;
