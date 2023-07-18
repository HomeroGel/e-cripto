import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Cart } from './components/Cart'
import { NotFound } from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <Route path='/' element={<Hero /> }/> */}
        <Route path='/' element={<ItemListContainer /> }/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/products' element={<ItemDetailContainer/>} />
        <Route path='/carrito' element={<Cart/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
