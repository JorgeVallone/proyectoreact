import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/Containers/ItemDetailContainer';
import ItemListContainer from './Components/Containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Components/NotFound';
import Cart from './Components/Containers/Cart';
import ShopProvider from './context/ShopContext';

function App() {


  return (
    <ShopProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>       
</BrowserRouter>
    </ShopProvider>

  );

}

export default App;
