import type { NextPage } from "next";

import { LoadingIcon } from "@icon";

import styles from "@styles/components/UI/spinner.module.scss";

const Spinner: NextPage = () => {
  return (
    <div className={styles.spinner}>
      <LoadingIcon />
    </div>
  );
};

export default Spinner;
