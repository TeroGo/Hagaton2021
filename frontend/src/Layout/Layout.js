import React from "react";
import Chart from "../Chart/Chart";
import InfoBox from "../InfoBox/InfoBox";
import styles from "./Layout.module.css";
import logo from'../logo.png';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const message = "kissa";

function getClassificationIcon(classification) {
  switch (classification) {
    case "CHICKEN":
      return "🍗";

    case "BEEF":
      return "🥩";

    case "PORK":
      return "🐷";

    case "VEGETARIAN":
      return "🥕";

    case "SALMON":
      return "🍣";

    case "SHELLFISH":
      return "🦐";

    case "WHITE_FISH":
      return "🐟";

    default:
      return classification;
  }
}

const Layout = (props) => {
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const resultsLoaded = props.foodData && props.foodData.summary !== undefined;

  return (
    <main>
      <section className={styles.left}>
        <div className="logo-container">
          <img
            src={logo}
            alt="Lunchmaster 2k logo"
            style={{ marginBottom: "25px" }}
          />
        </div>
        <label htmlFor="foodInput">What did I have for lunch?</label>
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
            Execute Lunchmaster2k (TM) analysis →
          </button>
        </div>
      </section>

      <section className={styles.right}>
        {props.isLoading && (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <Loader
              type="Puff"
              color='#FF0099'
              height={250}
              width={250}
              timeout={0}
            />
          </div>
        )}
        {(!props.isLoading && resultsLoaded) && (
          <div className={styles.chart}>
            <div style={{ fontSize: "5em", position: "absolute", top: "0" }}>
              {getClassificationIcon(props.foodData.summary.classification)}
            </div>
            <Chart data={props.foodData} />
            {Object.keys(props.foodData).length !== 0 && (
              <InfoBox dataFromParent={props.foodData} />
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default Layout;
