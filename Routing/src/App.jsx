import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './Components/Layouts/Layouts';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import SinglePage from './Pages/SinglePage/SinglePage';


function App() {
      return <BrowserRouter>
        <Routes>
         <Route path = "/" element = {<Layouts/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/products" element = {<Products/>}/>
          <Route path="/products/:productId" element = {<SinglePage/>}/>
         </Route>
        </Routes>
      </BrowserRouter>
};

export default App;