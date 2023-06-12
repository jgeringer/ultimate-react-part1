import React from "react";
import styles from "./Button.module.css";

interface Props {
  text: string;
  variant?: "btn-primary" | "btn-secondary";
  onClick: () => void;
}

const Button = ({ text, variant = "btn-secondary", onClick }: Props) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
