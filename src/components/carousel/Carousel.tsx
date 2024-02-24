import React, { useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import styles from "./styles.module.scss";

const MAX_VISIBILITY = 3;

export const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className={styles.carousel}>
      {active > 0 && (
        <button
          className={`${styles.nav} ${styles.left}`}
          onClick={() => setActive((i: number) => i - 1)}
        >
          <TbChevronLeft />
        </button>
      )}
      {React.Children.map(children, (child: any, i: number) => (
        <div
          className={styles.card_container}
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            } as React.CSSProperties
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className={`${styles.nav} ${styles.right}`}
          onClick={() => setActive((i: number) => i + 1)}
        >
          <TbChevronRight />
        </button>
      )}
    </div>
  );
};
