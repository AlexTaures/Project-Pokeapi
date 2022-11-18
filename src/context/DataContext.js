import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const DataContext = createContext();


  

export const DataProvider = ( {children} ) => {
    let lista = [];
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then((response) => {

      
      for(let i=0; i < response.data.results.length; i++ ){
        
        axios.get(response.data.results[i].url)
          .then( async (resp) =>{
            
            
           try {
              lista.push({
                name: await resp.data.name,
                id: await resp.data.id,
                sprite: await resp.data.sprites.front_default,
                typeA: await resp.data.types[0].type.name,
                typeB: await resp.data.types[1].type.name
              })
            } catch (err) {
              lista.push({
                name: await resp.data.name,
                id: await resp.data.id,
                sprite: await resp.data.sprites.front_default,
                typeA: await resp.data.types[0].type.name,
                typeB: ''
              })
            }
            
          })
      }
    }); 
    
    const [data, setData] = useState(lista);
    const [typeA, setTypeA] = useState('');
    const [typeB, setTypeB] = useState('')
    return (
        <DataContext.Provider value={{
            data, setData,
            typeA, setTypeA,
            typeB, setTypeB
        }}>
            { children }
        </DataContext.Provider>
    )
}

/*import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ( {children} ) => {

    
    const [data, setData] = useState();
    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
            { children }
        </DataContext.Provider>
    )
} */