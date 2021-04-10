import React from "react";
import Chart from "../Chart/Chart";
import InfoBox from "../InfoBox/InfoBox";
import styles from "./Layout.module.css";
import logo from'../logo.png';

const message = "kissa";

function getClassificationIcon(classification) {
  switch (classification) {
    case 'CHICKEN':
      return '🍗';

    case 'BEEF':
      return '🥩';

    case 'PORK':
      return '🐷';

    case 'VEGETARIAN':
      return '🥕';

    case 'SALMON':
      return '🍣';

    case 'SHELLFISH':
      return '🦐';

    case 'WHITE_FISH':
      return '🐟';

    default:
      return classification;
  }
}

const Layout = (props) => {
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const resultsLoaded = props.foodData && (props.foodData.summary !== undefined);

  return (
    <main>
      <section className={styles.left}>
        <div className='logo-container'>
          <img src={logo} alt='Lunchmaster 2k logo' style={{ marginBottom: '25px' }} />
        </div>
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
          {resultsLoaded && (
            <>
              <div style={{ fontSize: '256px', position: 'absolute', top: '0' }}>
                {getClassificationIcon(props.foodData.summary.classification)}
              </div>              
            </>
          )}
          <Chart data={props.foodData} />
          <InfoBox dataFromParent={props.foodData} />
        </div>
      </section>
    </main>
  );
};

export default Layout;
