import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ProductPage from './screens/ProductPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route
           path="/"
           element={<HomePage/>}
           />
            <Route
           path="/product:productData"
           element={<ProductPage/>}
           />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
