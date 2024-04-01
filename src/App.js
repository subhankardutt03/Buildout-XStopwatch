import "./App.css";
import Header from "./components/header/Header";
import Stopwatch from "./components/stopwatch/Stopwatch";

function App() {
  return (
    <div className="App">
      <Header name={"Stopwatch"} />
      <Stopwatch />
    </div>
  );
}

export default App;
