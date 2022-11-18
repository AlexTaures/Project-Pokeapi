import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'

export default function NavBar() {
    const {setTypeA, setTypeB} = useContext( DataContext );
    let typeA = '';
    let typeB = '';

    const handleInputChange1 = (event) => {
        //console.log(event.target.value)
        typeA = event.target.value;
        
        console.log(typeA)
    } 

    const handleInputChange2 = (event) => {
        //console.log(event.target.value)
        typeB = event.target.value;
        
        console.log(typeB)
    } 

    const buscar = (event) => {
        event.preventDefault();
        //console.log(typeA + ' ' + typeB)
        event.target.value='default'
        setTypeA(typeA);
        setTypeB(typeB);
    }

    const buscarTodos = (event) => {
        setTypeA('');
        setTypeB('');
    }

  return (
    <div>
    
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" onClick={buscarTodos}>Todos los Pokemon</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            
        
            <form onSubmit={buscar}>  
            <h7 class='mx-3'>Seleccione el primer tipo:  </h7> 
                <select id='tipo1' onChange={handleInputChange1}>
                    <option selected=''>default</option>
                    <option>normal</option>
                    <option>fighting</option>
                    <option>flying</option>
                    <option>poison</option>
                    <option>ground</option>
                    <option>rock</option>
                    <option>bug</option>
                    <option>ghost</option>
                    <option>steel</option>
                    <option>fire</option>
                    <option>water</option>
                    <option>grass</option>
                    <option>electric</option>
                    <option>psychic</option>
                    <option>ice</option>
                    <option>dragon</option>
                    <option>dark</option>
                    <option>fairy</option>
                </select>
            <h7 class='mx-3'>Seleccione el segundo tipo: </h7>
                <select id='tipo2' onChange={handleInputChange2}>
                        <option selected=''>default</option>
                        <option>normal</option>
                        <option>fighting</option>
                        <option>flying</option>
                        <option>poison</option>
                        <option>ground</option>
                        <option>rock</option>
                        <option>bug</option>
                        <option>ghost</option>
                        <option>steel</option>
                        <option>fire</option>
                        <option>water</option>
                        <option>grass</option>
                        <option>electric</option>
                        <option>psychic</option>
                        <option>ice</option>
                        <option>dragon</option>
                        <option>dark</option>
                        <option>fairy</option>
                </select>
            <button type='submit' className="buton mx-3 bg-5">Buscar</button>
            </form>
        
            
        

        </div>
        </div>
    </div>
</nav>
    </div>
  )
}
