import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/home/Home'
import Register from '../src/pages/register/Register';
import SimularionResult from './pages/simulationResult/SimulationResult';
import Plans from './pages/plans/Plans';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {



  return (
    <div className="App">
      
      <BrowserRouter>
         <NavBar/>
          <div className="container">
            <Routes>
              <Route path='/' element={ <Home/> } />
              <Route path='/ourplan' element={ <Home/> } />
              <Route path='/register' element={ < Register /> } />
              <Route path='/response' element={ < SimularionResult /> } />
              <Route path='/consult' element={ < Plans /> } />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>  
    </div>
  );
}

export default App;

