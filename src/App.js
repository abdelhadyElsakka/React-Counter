import "./App.css"
import NavBar from './Compnents/navBar';
import Home from './pages/home'
import Counter from './pages/counter'
import Shop from './pages/shop'
import Product from './pages/shop/product'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() { 
  return (
    <Router>
    <NavBar/>
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/Shop' element={< Shop />}/>
      <Route path='Counter/' element={< Counter />}/>
      <Route path='/Shop/:id' element={< Product />}/>
    </Routes>
    </Router>
     
  );
}

export default App;
