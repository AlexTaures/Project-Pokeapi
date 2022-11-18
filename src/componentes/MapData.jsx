import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import PkmnCard from './PkmnCard'
import '../styles/MapData.css'

export default function MapData() {
  const { data, typeA, typeB} = useContext( DataContext );
  //console.log(data); 
  //console.log(typeA, typeB);
  return(
  
    
      <div className='wrapper'>{
        data.map((value, index) => 
            <PkmnCard data = {value} typeA = {typeA} typeB={typeB}/>        
    )
        }
        </div>
     
  )
}
