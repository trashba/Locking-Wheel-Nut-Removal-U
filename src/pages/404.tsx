import type { GetStaticPropsContext, NextPage } from "next";

import Layout from "@components/Layout/Main";
import Seo from "@components/Seo";

import styles from "@styles/pages/not-found.module.scss";

const NotFoundPage: NextPage = () => {
  return (
    <Layout>
      <Seo title="404" />

      <div className="container">404 Not Found</div>
    </Layout>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => ({
  props: {},
});

export default NotFoundPage;
