import React from "react";
import "./App.css";
import Layout from "./Layout/Layout";

export const chartData = [
  { x: "Calories", y: 900 },
  { x: "Group Carb", y: 400 },
  { x: "Fat", y: 100 },
  { x: "Protein", y: 300 },
];

function App() {
  const [foodData, setFoodData] = React.useState({});

  async function fetchData(searchPhrase) {
    console.log(searchPhrase);
    const response = await fetch(
      `https://lunchmaster2k.herokuapp.com/api?text=${searchPhrase}`
    );
    const food = await response.json();
    setFoodData(food);
    console.log(food);
  }

  React.componentDidMount = () => {
    fetchData();
  };

  const testData = {};

  return (
    <div className="App">
      <Layout foodData={foodData} getData={fetchData} />
    </div>
  );
}

export default App;
