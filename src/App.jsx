import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemDetailContainer from './Components/Containers/ItemDetailContainer';
import ItemListContainer from './Components/Containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './Components/NotFound';

function App() {


  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>       
</BrowserRouter>
  );

}

export default App;
