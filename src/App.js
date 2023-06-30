import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer img='./inConstruction.svg' title='Gracias por visitarnos, aun estamos construyendo nuestra pagina!' subTitle='Vuelve pronto!'/>
    </>
  );
}

export default App;
