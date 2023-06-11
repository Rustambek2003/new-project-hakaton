
import { Route ,Routes} from 'react-router-dom';
import Header from '../components/pages/Header/Header';
import './App.css';
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import AdminPanel from '../components/pages/admin/AdminPanel';
import Footer from '../components/pages/Footer/Footer';
import Cart from '../components/pages/cart/Cart';
import Registr from '../components/pages/Registr/Registr';




function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>Con
        <Route path='/admin' element={<AdminPanel/>}/>
      
      
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/rgs' element={<Registr/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
