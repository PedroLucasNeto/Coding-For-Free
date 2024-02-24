import { ComponentProps, ReactNode } from "react";
import styles from "./styles.module.scss";

type InputProps = ComponentProps<"input"> & {
  label: ReactNode;
};

const Input = ({ id, label, ...rest }: InputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...rest}
      />
    </div>
  );
};

export default Input;
