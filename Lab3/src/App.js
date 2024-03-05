import logo from './logo.svg';
import './App.css';
import Product from './component/products.jsx';
import useFetch from './component/customHock.js';
import Navbar from './component/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './AddProduct.jsx';
import ErrorPage from './component/ErrorPage.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar/> */}
     
          <Routes>
            {
              ['Product', '/','home'].map((path, index) => 
              <Route path={path} element={<><Navbar /><Product/></>} key={index} />)
            }
            <Route path="add" element={<><Navbar /><AddProduct /></>} />
            <Route path="*" element={<ErrorPage />} />
            

          </Routes>
      </BrowserRouter>
     
    </div>
  );
  
}

export default App;
