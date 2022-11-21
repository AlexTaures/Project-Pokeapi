import React, { useContext} from 'react'
import { DataContext } from '../context/DataContext'

export default function NavBar() {
    const {setTypeA, setTypeB} = useContext( DataContext );
    let typeA = '';
    let typeB = '';


/*
    const handleInputChange1 = (event) => {
        //console.log(event.target.value)
        //typeA = event.target.value;
        
        //console.log(typeA)
    } 

    const handleInputChange2 = (event) => {
        //console.log(event.target.value)
       // typeB = event.target.value;
        //console.log(typeB)
    } */

    const buscar = (event) => {
        event.preventDefault();
        if(event.target.tipo1.value===''){typeA=''};
        if(event.target.tipo2.value===''){typeB=''};
        typeA=event.target.tipo1.value;
        typeB=event.target.tipo2.value;
        //console.log(typeA, typeB)
        setTypeA(typeA);
        setTypeB(typeB);
    }

    const buscarTodos = (event) => {
        typeA='';
        typeB='';
        //console.log(typeA, typeB, 'funciona');
        setTypeA(typeA);
        setTypeB(typeB);
    }

  return (
    <div>
    
    <nav className="navbar navbar-expand-lg bg-black">
    <div className="container-fluid">
        <button className="btn btn-success" onClick={buscarTodos}>Todos los Pokemon</button>
        <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            
        
            <form onSubmit={buscar} className='navbar-nav'>  
            <h5 className='navbar-brand mx-3 text-light'>Seleccione el primer tipo:  </h5> 
                <select name='tipo1'>
                    <option></option>
                    <option value={'normal'}>Normal</option>
                    <option value={'fighting'}>Lucha</option>
                    <option value={'flying'}>Volador</option>
                    <option value={'poison'}>Veneno</option>
                    <option value={'ground'}>Tierra</option>
                    <option value={'rock'}>Roca</option>
                    <option value={'bug'}>Bicho</option>
                    <option value={'ghost'}>Fantasma</option>
                    <option value={'steel'}>Acero</option>
                    <option value={'fire'}>Fuego</option>
                    <option value={'water'}>Agua</option>
                    <option value={'grass'}>Hierba</option>
                    <option value={'electric'}>Eléctrico</option>
                    <option value={'psychic'}>Psiquico</option>
                    <option value={'ice'}>Hielo</option>
                    <option value={'dragon'}>Dragón</option>
                    <option value={'dark'}>Oscuro</option>
                    <option value={'fairy'}>Hada</option>
                </select>
            <h5 className='navbar-brand mx-3 text-light'>Seleccione el segundo tipo: </h5>
                <select name='tipo2'>
                        <option></option>
                        <option value={'normal'}>Normal</option>
                        <option value={'fighting'}>Lucha</option>
                        <option value={'flying'}>Volador</option>
                        <option value={'poison'}>Veneno</option>
                        <option value={'ground'}>Tierra</option>
                        <option value={'rock'}>Roca</option>
                        <option value={'bug'}>Bicho</option>
                        <option value={'ghost'}>Fantasma</option>
                        <option value={'steel'}>Acero</option>
                        <option value={'fire'}>Fuego</option>
                        <option value={'water'}>Agua</option>
                        <option value={'grass'}>Hierba</option>
                        <option value={'electric'}>Eléctrico</option>
                        <option value={'psychic'}>Psiquico</option>
                        <option value={'ice'}>Hielo</option>
                        <option value={'dragon'}>Dragón</option>
                        <option value={'dark'}>Oscuro</option>
                        <option value={'fairy'}>Hada</option>
                    </select>
            <div className='mx-2'></div>
            <button type='submit' className="btn btn-primary mx-auto my-2 col-3">Buscar</button>
            </form>
        
            
        

        </div>
        </div>
    </div>
</nav>
    </div>
  )
}
