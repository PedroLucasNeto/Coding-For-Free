import { ComponentProps } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

type WrapperProps = ComponentProps<"main">;

const Wrapper = ({ className, ...rest }: WrapperProps) => {
  const classes = classNames(styles.container, className);

  return (
    <main className={classes} {...rest}>
    </main>
  );
};

export default Wrapper;
