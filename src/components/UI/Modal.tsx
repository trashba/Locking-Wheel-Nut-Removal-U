import type { ReactNode } from "react";
import type { NextPage } from "next";

import styles from "@styles/components/UI/modal.module.scss";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children?: ReactNode;
};

const Modal: NextPage<Props> = ({ visible, setVisible, children }) => {
  return (
    <div
      className={[
        styles.modal,
        styles[`modal__${visible ? "visible" : "hidden"}`],
      ].join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(modal) => {
          modal.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
