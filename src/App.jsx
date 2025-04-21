import Header from './components/Header';
import './assets/CSS/style.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { HOME, CART, CHECKOUT } from './utils/consts';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={CART} element={<Cart />} />
          <Route path={CHECKOUT} element={<Checkout />} />
        </Routes>
      </CartProvider>
    </>
  )
}
export default App;