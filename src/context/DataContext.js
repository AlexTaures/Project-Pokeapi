import React, { createContext, useState } from 'react';


export const DataContext = createContext();




export const DataProvider =  ( {children} ) => {
    let lista = [];
    const [data, setData] = useState(lista);
    const [typeA, setTypeA] = useState('');
    const [typeB, setTypeB] = useState('');
    const [num, setNum] = useState(0);
    const [end, setEnd] = useState(0);

      //console.log(data);
    return (
        <DataContext.Provider value={{
            data, setData,
            typeA, setTypeA,
            typeB, setTypeB,
            num, setNum,
            end, setEnd
        }} >
            { children }
        </DataContext.Provider>
    )
}