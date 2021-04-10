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
  const [isLoading, setIsLoading] = React.useState(false);

  async function fetchData(searchPhrase) {
    console.log(searchPhrase);
    try {
      const response = await fetch(
        `https://lunchmaster2k.herokuapp.com/api?text=${searchPhrase}`
      );
      setIsLoading(true);
      const food = await response.json();
      setTimeout(() => {
        setFoodData(food);
        setIsLoading(false);
        console.log(food);
      }, 1000);
    } catch (err) {
      setIsLoading(false);
      alert(err);
    }
  }

  React.componentDidMount = () => {
    fetchData();
  };

  const testData = {};

  return (
    <div className="App">
      <Layout foodData={foodData} getData={fetchData} isLoading={isLoading} />
    </div>
  );
}

export default App;
