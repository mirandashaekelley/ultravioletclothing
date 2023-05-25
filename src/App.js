import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation';
import { Featured } from './components/Featured';
import { Banner1 } from './components/Banner1';
import { BestSeller } from './components/BestSeller';
import { FeaturedCollections } from './components/FeaturedCollections';
import { Categories } from './components/Categories';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Featured/>
      <Banner1/>
      <BestSeller/>
      <FeaturedCollections/>
      <Categories/>
      <Footer/>
    </div>
  );
}

export default App;
