import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Cart } from './components/Cart'
import { NotFound } from './components/NotFound';
import { CartContext } from './context/cartContext';
import { Index } from './pages/Index';
import { Category } from './components/Category';
import { Detail } from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <CartContext.Provider value={[]}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/item/:id' element={<Detail />} />
          {/* <Route path='/products' element={<ItemDetailContainer />} /> */}
          <Route path='/carrito' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
