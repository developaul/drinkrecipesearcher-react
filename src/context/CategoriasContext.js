import React, { createContext, useState, useEffect } from 'react'

import axios from 'axios';

// Crear Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {

        (async () => {

            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias = await axios.get(url);
            setCategorias(categorias.data.drinks);

        })();

    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider;