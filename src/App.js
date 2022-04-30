import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home'
import AboutRPA from './pages/AboutRPA';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import AboutUS from './pages/AboutUS';
import ContactUS from './pages/ContactUS';
import DefaultLayout from './layouts';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
      <DefaultLayout >
      <Routes>
          <Route path='/' element={<Home companyname={'Ajna Tech'} />} exact />
          <Route path='/aboutrpa' element={<AboutRPA companyname={'Ajna Tech'} />} exact />
          <Route path='/products' element={<Products />} exact />
          <Route path='/solutions' element={<Solutions />} exact /> 
          <Route path='/resources' element={<Resources />} exact />
          <Route path='/aboutus' element={<AboutUS companyname={'Ajna Tech'} />} exact />
          <Route path='/contactus' element={<ContactUS companyname={'Ajna Tech'} />} exact />
        </Routes>
      </DefaultLayout>
       {/* <Footer /> */}
      </Router>
    
    </div>
  );
}

export default App;
