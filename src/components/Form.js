import React, { useContext } from 'react';

import { CategoriasContext } from '../context/CategoriasContext';
import useForm from '../hooks/useForm';

const Form = () => {

    const { categorias } = useContext(CategoriasContext);

    const [busqueda, setBusqueda, handleInputChange] = useForm({
        nombre: '',
        categoria: ''
    });

    const { nombre, categoria } = busqueda;

    return (
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        placeholder="Buscar por Ingrediente"
                        className="form-control"
                        name="nombre"
                        type="text"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        value={categoria}
                        onChange={handleInputChange}
                    >
                        <option value="">-- Seleciona Categoría --</option>
                        {
                            categorias.map(({ strCategory }) => (
                                <option
                                    key={strCategory}
                                    value={strCategory}
                                >
                                    {strCategory}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form >
    );
};

export default Form;