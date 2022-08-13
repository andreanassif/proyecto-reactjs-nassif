import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Counter from './components/Counter/Counter'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
//import MercadoLibre from './components/MercadoLibre/MercadoLibre';
//import Animation from './components/Animation/Animation';
import { CartContextProvider } from './context/CartContext'

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />	        
          <Routes>	          
             <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
             <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />	            
             <Route path='/detail/:productId' element={<ItemDetailContainer />} />  	            
             <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          </BrowserRouter>
        {/* <Animation /> */}
      </CartContextProvider>
    </div>
  );
}
     /*  {/* <BrowserRouter>
          <Navbar />
              <Routes>
                <Route path="/" element={<ItemListContainer greeting='Listados de nuestros productos'/>}/>
                <Route path="/tipo/:tipoId" element={<ItemListContainer greeting='Listado filtrado'/>}/>
                <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
                <Route path="/" element={<MercadoLibre/>}/>
                <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
              </Routes>
      </BrowserRouter> */
      /* <Animation /> */
    

export default App;



