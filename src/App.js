import logo from './logo.svg';
import './Style.scss';
import Header from './Com/Header';
import Nav from './Com/Nav';
import Product from './Pages/Product';
import Magazine from './Pages/Magazine';
 import Contact from './Pages/Contact';
 import Slider from './Com/Slider';
 import What from './Com/What';
 import Why from './Com/Why';
 import Account from './Pages/Account';
 import Dollar from './Com/Dollar';
 import Salma from './Com/Salma';
 import Footer from './Com/Footer';
 import Most from './Com/Most';
 import Home from './Pages/Home';
 
import { BrowserRouter } from "react-router-dom";
 
function App() {
  return (
    
    <div className="App">
      
      <Header/>
      <Nav/>
      {/* <Home/> */}
      {/* <Slider/> */}
      <Footer/>
      
      {/* <Product/> */}
      {/* <Magazine/> */}
      
     
      {/* <What/> */}
      {/* <Why/> */}
      {/* <Contact/> */}
      {/* <Account/> */}
      {/* <Dollar/> */}
      {/* <Salma/> */}
    
      {/* < Most/> */}
      
      
      
      
      
      
     
    </div>
    
  );
}

export default App;
