import './App.css';
import ItemListContainer from './Components/Containers/ItemListContainer';

import NavBar from './Components/NavBar/NavBar';


function App() {


  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting="Hola soy el greeting"/>
    
    </div>
  );
}

export default App;
