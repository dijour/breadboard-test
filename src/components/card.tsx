import { FC, ReactNode } from "react";
import styles from "./card.module.css";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
