import './App.css';
import {DataProvider} from './context/DataContext'
import MapData from './componentes/MapData';
import NavBar from './componentes/NavBar';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import BuscarPkmn from './componentes/BuscarPkmn'



function App() {
  return (
    
    <Router>
        <div className='brn-group'>
          <NavLink to='/' className='btn btn-dark' activeClassName='active'>Inicio</NavLink>
          <NavLink to='/buscar' className='btn btn-dark' activeClassName='active'>Buscar</NavLink>

        </div>

        <Routes>
          
          <Route exact path="/buscar" element={
            <div className="App">
            <DataProvider>
                <NavBar />
                <MapData />
            </DataProvider>
        </div>
          }/>
          <Route exact path="/" element={
            <BuscarPkmn />
          }/>
          
        </Routes>
    </Router>




            
        
    
  )
}

export default App;
