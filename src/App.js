//import logo from './logo.svg';
import './App.css';
import './scss/index.scss';
import BarraNav from './Secciones/Header/Navbar';
import Servicios from './Secciones/Body/Servics';
import AboutUs from './Secciones/Body/About';
import Products from './Secciones/Body/Products';
import DateContact from './Secciones/Body/Contacts';
import Foot from './Secciones/Footer';




function App() {
  return (
    <div className='App'>
      <header>
        <h1>Header</h1>
        <BarraNav />
      </header>
      <body>
        <AboutUs />
        <Servicios />
        <Products />
        <DateContact />
      </body>
      <footer>
        <Foot/>
      </footer>
    </div>


  )
};

export default App;
