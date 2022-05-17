import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./views/Home";
import ItemCounter from "./components/ItemCounter/ItemCounter";
import CartWidget from "./components/CartWidget/CartWidget";


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/products" element={<ItemListContainer tittle="Welcome to RYM!"/>}/>
          <Route path="details" element={<ItemCounter></ItemCounter>}/>
          <Route path='cart' element={<CartWidget></CartWidget>}/>
        </Routes>
          </BrowserRouter>
  );
}

export default App;
