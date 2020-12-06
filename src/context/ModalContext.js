import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {

    const [idReceta, setIdReceta] = useState(null);
    const [infoReceta, setInfoReceta] = useState({});

    useEffect(() => {

        if (!idReceta) return;

        (async () => {

            const ingredientes = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`);
            setInfoReceta(ingredientes.data.drinks[0]);

        })();


    }, [idReceta]);

    return (
        <ModalContext.Provider
            value={{
                infoReceta,
                setInfoReceta,
                setIdReceta
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;