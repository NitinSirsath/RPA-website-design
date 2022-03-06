import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import AboutRPA from './pages/AboutRPA';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import AboutUS from './pages/AboutUS';
import ContactUS from './pages/ContactUS';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home companyname={'Companyname'}/>} exact></Route>
          <Route path='/aboutrpa' element={<AboutRPA companyname={'Companyname'}/>} exact></Route>
          <Route path='/products' element={<Products />} exact></Route>
          <Route path='/solutions' element={<Solutions />} exact></Route>
          <Route path='/resources' element={<Resources />} exact></Route>
          <Route path='/aboutus' element={<AboutUS companyname={'Companyname'}/>} exact></Route>
          <Route path='/contactus' element={<ContactUS companyname={'Companyname'}/>} exact></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
