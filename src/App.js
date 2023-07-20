import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { NotFound } from './components/NotFound';
import { CartContext } from './context/cartContext';
import { Index } from './pages/Index';
import { Category } from './components/Category';

function App() {
  return (
    <BrowserRouter>
      <CartContext.Provider value={[]}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          {/* <Route path='/products' element={<ItemDetailContainer />} /> */}
          <Route path='/carrito' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
