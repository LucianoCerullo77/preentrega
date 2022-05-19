// import Header from "./components/Header/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from "./views/Home";
// import ItemCounter from "./components/ItemCounter/ItemCounter";
// import CartWidget from "./components/CartWidget/CartWidget";
// import Item from "./components/Item/Item";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


// function App() {
//   return (
//     <BrowserRouter>
//         <Header/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path="/products" element={<ItemListContainer tittle="Welcome to RYM!"/>}/>
//           <Route path="details/:id" element={<ItemDetailContainer></ItemDetailContainer>}/>
//           <Route path='cart' element={<CartWidget></CartWidget>}/>
//         </Routes>
//           </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home/Home"
import Cart from "./views/Cart/Cart"
import Products from "./views/Products/Products"
import Category from "./views/Category/Category"
import Product from "./views/Product/Product"


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;