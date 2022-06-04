import './App.css';
import Header from "./components/header";
import FilterCard from "./components/filter-card";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FilterCard />
      </div>
    </div>
  );
}

export default App;
