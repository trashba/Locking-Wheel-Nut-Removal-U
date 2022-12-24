import type { GetStaticPropsContext, NextPage } from "next";

import Layout from "@components/Layout/Main";
import Seo from "@components/Seo";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Seo />

      <div className="container">Locking Wheel Nut Removal UK</div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => ({
  props: {},
});

export default HomePage;
