import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { Hero } from './components/Hero';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Hero/>
      <Routes>
        <Route path='/' element={<ItemListContainer /> }/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/products' element={<ItemDetailContainer/>} />
        <Route path='/carrito' element={<Cart/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
