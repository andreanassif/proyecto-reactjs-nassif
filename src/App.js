import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter'; 


function App() {

  return (
    <div className="App">
      <Navbar />
      <Counter />
      <ItemListContainer greeting='Hola queridos usuarios'/>
      <ItemListContainer greeting='Producto 1'/>
      <ItemListContainer greeting='Producto 2'/>
      <ItemListContainer greeting='Producto 3'/>
    </div>
  );
}

export default App;



