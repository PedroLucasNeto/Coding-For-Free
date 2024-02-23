import { ComponentProps, ReactNode } from "react";
import styles from "./styles.module.scss";

type TextAreaProps = ComponentProps<"textarea"> & {
  label: ReactNode;
};

const TextArea = ({ id, label, ...rest }: TextAreaProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
