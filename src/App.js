import logo from './logo.svg';
import './App.css';
import BeerBox from './containers/BeerBox';

function App() {
  return (
    <>
    <h1>Beer List</h1>
    <hr/>
    <BeerBox/>
    <div className = "beer-details">
    </div>
    </>
  );
}

export default App;
