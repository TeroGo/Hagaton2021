import React from "react";
import Chart from "../Chart/Chart";
import InfoBox from "../InfoBox/InfoBox";
import styles from "./Layout.module.css";

const message = "kissa";

const Layout = (props) => {
  const [searchPhrase, setSearchPhrase] = React.useState("");

  return (
    <main>
      <section className={styles.left}>
        <label htmlFor="foodInput">Enter lunch description</label>
        <textarea
          id="foodInput"
          value={searchPhrase}
          onChange={(event) => setSearchPhrase(event.currentTarget.value)}
        ></textarea>
        <div>
          <button
            onClick={() => {
              props.getData(searchPhrase);
            }}
          >
            Haistele raaka-aineet
          </button>
        </div>
      </section>

      <section className={styles.right}>
        <div className={styles.chart}>
          <Chart />
          <InfoBox dataFromParent={props.foodData} />
        </div>
      </section>
    </main>
  );
};

export default Layout;
