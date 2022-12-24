import { useMemo } from "react";
import type { NextPage } from "next";

import { StyleColors } from "@interface/UI/button";

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InfoIcon,
  XCircleIcon,
} from "@icon";

import styles from "@styles/components/UI/alert.module.scss";

type Props = {
  title?: string;
  description?: string;
  style?: StyleColors;
};

const Alert: NextPage<Props> = ({ title, description, style = "green" }) => {
  const icon = useMemo(() => {
    switch (style) {
      case "blue":
        return <InfoIcon />;

      case "green":
        return <CheckCircleIcon />;

      case "red":
        return <XCircleIcon />;

      case "yellow":
        return <ExclamationTriangleIcon />;
    }
  }, [style]);

  return (
    <div className={[styles.alert, styles[`alert__${style}`]].join(" ")}>
      <div className={styles.alert__icon}>{icon}</div>

      <div className={styles.alert__content}>
        {title && <h5 className={styles.content__title}>{title}</h5>}

        {description && (
          <p className={styles.content__description}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Alert;
