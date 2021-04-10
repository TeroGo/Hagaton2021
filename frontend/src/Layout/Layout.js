import React from "react";
import Chart from "../Chart/Chart";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <main>
      <section className={styles.left}>
        <label for="foodInput">Enter lunch description</label>
        <textarea
          id="foodInput"
          defaultValue="Riisinuudeli ”phad thai” kana"
        ></textarea>
        <div>
          <button>Haistele raaka-aineet</button>
        </div>
      </section>

      <section className={styles.right}>
        <div className={styles.chart}>
          <Chart />
        </div>
      </section>
    </main>
  );
};

export default Layout;
