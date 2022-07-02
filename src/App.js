import "./App.css"
import NavBar from './Compnents/navBar';
import Home from './pages/home'
import Counter from './pages/counter'
import Shop from './pages/shop'
import Product from './pages/shop/product'
import Todo from './pages/todo/Todo'
import Register from './pages/Register/register'


import {
  BrowserRouter as Router,
  Routes,
  Route
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
      <Route path='/ToDO' element={< Todo />}/>
      <Route path='/Register' element={< Register />}/>
    </Routes>
    </Router>
     
  );
}

export default App;
