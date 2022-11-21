import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import PkmnCard from './PkmnCard'
import '../styles/MapData.css'
import pokeball from '../img/pokeballanimated.gif'

export default function MapData() {
  
  const { data, typeA, typeB, num, end} = useContext( DataContext );
  //console.log(data); 
  //console.log(num, end);
 
  

  
  if(num+1<end){return(
  <>
  <div className='alert alert-secondary'>Cargando {num+2}/{end} resultados </div>
  <img src={pokeball} width='150px' alt=''/>
  </>
  
  )}
  else{return(
      <div className='wrapper'>{
      data.map((value, index) => <PkmnCard key={index} data = {value} typeA = {typeA} typeB={typeB}/>)
      //console.log(data.leng)
      }
      </div>
  )}


}
