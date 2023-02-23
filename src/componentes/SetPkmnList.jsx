import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
import axios from 'axios';

export default function SetPkmnList() {
    const { setData, setNum, setEnd } = useContext(DataContext);
    let lista = []

    const getData = async () => {
        await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
        .then(async(response) => {
          setEnd(response.data.results.length);
          
          for(let i=0; i < response.data.results.length; i++ ){
            
            await axios.get(response.data.results[i].url)
              .then( async (resp) =>{
              
              setNum(i);
                
               try {
                  lista[i]={
                    name: resp.data.name,
                    id: resp.data.id,
                    sprite: resp.data.sprites.other['official-artwork'].front_default,
                    typeA: resp.data.types[0].type.name,
                    typeB: resp.data.types[1].type.name
                  }
                } catch (err) {
                  lista[i]={
                    name: resp.data.name,
                    id: resp.data.id,
                    sprite: resp.data.sprites.other['official-artwork'].front_default,
                    typeA: resp.data.types[0].type.name,
                    typeB: ''
                  }
                }
               
              })
          }
        
        })
        //console.log(lista)
        setData(lista)
        }
    
    useEffect(() => {
      async function setList(){
        await getData()
      }
      setList();
    }
    , [])
    



  return (
    <></>
  )
}
