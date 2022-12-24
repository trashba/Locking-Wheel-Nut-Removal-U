import type { NextPage } from "next";

import { CheckIcon } from "@icon";
import { Button } from "@ui";

import styles from "@styles/components/UI/checkbox.module.scss";

type Props = {
  checked: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Checkbox: NextPage<Props> = ({ checked, onClick, disabled }) => {
  return (
    <Button
      style={checked ? "blue" : "gray"}
      className={[styles.checkbox].join(" ")}
      onClick={() => !disabled && onClick && onClick()}
      size="xs"
      icon={checked ? <CheckIcon /> : undefined}
      disabled={disabled}
    />
  );
};

export default Checkbox;
