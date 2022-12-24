import type { NextPage } from "next";

import styles from "@styles/components/UI/drawer.module.scss";
import { ReactNode } from "react";

type Props = {
  visible?: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  children?: ReactNode;
};

const Drawer: NextPage<Props> = ({
  children,
  className = "",
  visible,
  setVisible,
}) => {
  return (
    <div
      className={[
        styles.drawer,
        visible ? styles[`drawer__visible`] : "",
        className,
      ].join(" ")}
      onClick={() => {
        if (setVisible) {
          setVisible((prevState) => !prevState);
        }
      }}
    >
      <div
        className={styles.drawer_content}
        onClick={(el) => el.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
