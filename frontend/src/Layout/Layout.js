import React from "react";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <main>
      <section className={styles.left}>
        <textarea defaultValue="Riisinuudeli ”phad thai” kana"></textarea>
        <div>
          <button>Haistele raaka-aineet</button>
        </div>
      </section>

      <section className={styles.right}>
        <div className={styles.chart}>Awesome chart of the results</div>
      </section>
    </main>
  );
};

export default Layout;
