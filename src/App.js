import './App.css';
import Navbar from './Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Product from './Components/Product/Product';
import Blog from './Components/Blog/Blog';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Product/>
      <Blog/>
      <Shop/>
      <Footer/>
    </div>
  );
}

export default App;
