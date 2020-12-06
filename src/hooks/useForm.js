import { useState } from 'react';

const useForm = (initialState = {}) => {

    const [state, setState] = useState(initialState);

    // Captura los valores del formulario
    const handleInputChange = ({ target }) => setState({
        ...state,
        [target.name]: target.value
    });

    return [state, setState, handleInputChange];
};

export default useForm;