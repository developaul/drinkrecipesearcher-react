import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {

    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });



    return (
        <RecetasContext.Provider
            value={{
                setBusqueda
            }}
        >
            {children}
        </RecetasContext.Provider>
    );
};

export default RecetasProvider;