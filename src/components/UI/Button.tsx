import type { NextPage } from "next";
import Link from "next/link";

import type { Size, StyleColors } from "@interface/UI/button";

import { LoadingIcon } from "@icon";

import styles from "@styles/components/UI/button.module.scss";

type Props = {
  text?: string;
  href?: string;
  icon?: JSX.Element;
  iconRight?: boolean;
  style?: StyleColors;
  size?: Size;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  tabIndex?: number;
  disabled?: boolean;
  ariaLabel?: string;
  type?: "submit" | "button";
};

const Button: NextPage<Props> = ({
  href,
  icon = null,
  iconRight = false,
  text = "",
  style = "blue",
  size = "sm",
  loading = false,
  onClick,
  className = "",
  tabIndex,
  disabled = false,
  ariaLabel,
  type = "button",
}) => {
  const attributes = {
    className: [
      styles.btn,
      styles[`btn__${style}`],
      styles[`btn__${size}`],
      className,
    ].join(" "),
    onClick: () => {
      if (onClick && !loading && !disabled) {
        onClick();
      }
    },
    tabIndex,
    disabled: loading ? true : disabled,
    "aria-label": ariaLabel,
  };

  const currentIcon: JSX.Element | null = loading ? <LoadingIcon /> : icon;

  const childrenEl: JSX.Element = (
    <>
      {!iconRight && currentIcon}

      {text && <p>{text}</p>}

      {iconRight && currentIcon}
    </>
  );

  if (href) {
    return (
      <Link href={href} {...attributes}>
        {childrenEl}
      </Link>
    );
  }

  return (
    <button {...attributes} type={type}>
      {childrenEl}
    </button>
  );
};

export default Button;
