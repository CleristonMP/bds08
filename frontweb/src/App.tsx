import './App.css';
import Header from './components/header';
import FilterCard from './components/filter-card';
import SalesCard from './components/sales-card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <FilterCard onFilterChange={() => undefined} />
        <SalesCard labels={['Feminino', 'Masculino', 'Outro']} series={[40, 40, 20]} />
      </div>
    </div>
  );
}

export default App;
