import React from "react";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <main>
      <section className={styles.left}></section>
      <textarea defaultValue="test"></textarea>
      <button>Haistele raaka-aineet</button>
      <section className={styles.right}></section>
    </main>
  );
};

export default Layout;
