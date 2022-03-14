import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BeersList from './pages/BeersList';
import BeersDetails from './pages/BeersDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<BeersList/>}/>
        <Route path="/beers/:id" element={<BeersDetails/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
