import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <img src="./logo.svg" alt="logo" className={styles.logo} />
    </div>
  );
};

export default Nav;
