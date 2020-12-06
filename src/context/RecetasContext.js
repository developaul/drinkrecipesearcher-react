import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = ({ children }) => {

    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    const { nombre, categoria } = busqueda;

    useEffect(() => {

        if (!Object.values(busqueda).every(property => property !== '')) return;

        (async () => {

            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
            const recetas = await axios.get(url);
            setRecetas(recetas.data.drinks);

        })();

    }, [busqueda, nombre, categoria]);

    return (
        <RecetasContext.Provider
            value={{
                recetas,
                setBusqueda
            }}
        >
            {children}
        </RecetasContext.Provider>
    );
};

export default RecetasProvider;