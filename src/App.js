import './App.css';
import {DataProvider} from './context/DataContext'
import MapData from './componentes/MapData';
import NavBar from './componentes/NavBar';
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import BuscarPkmn from './componentes/BuscarPkmn'
import SetPkmnList from './componentes/SetPkmnList';




function App() {
  return (
    <DataProvider>
      <SetPkmnList />
    <Router>
        <div className='navbar bg-black justify-content-start'>
          <NavLink to='/' className='btn btn-dark mx-2'>Pokemon específico</NavLink>
          <NavLink to='/buscar' className='btn btn-dark mx-2'>Filtrar por tipo</NavLink>
          
        </div>

        <Routes>
          
          <Route exact path="/buscar" element={
            <div className="App">
            
                <NavBar />
                <MapData />
            
        </div>
          }/>
          <Route exact path="/" element={
            <BuscarPkmn />
          }/>
          
        </Routes>
    </Router>
    </DataProvider>



            
        
    
  )
}

export default App;
