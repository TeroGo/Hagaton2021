import "./App.css";
import Layout from "./Layout/Layout";

export const chartData = [
  { x: "Calories", y: 900 },
  { x: "Group Carb", y: 400 },
  { x: "Fat", y: 100 },
  { x: "Protein", y: 300 },
];

export const nameOfFood = "Kanaviillokki"

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
