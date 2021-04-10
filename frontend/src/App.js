import "./App.css";
import Layout from "./Layout/Layout";

export const chartData = [
  { x: "Group A", y: 900 },
  { x: "Group B", y: 400 },
  { x: "Group C", y: 300 },
];

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
