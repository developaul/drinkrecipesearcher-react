import React, { useContext } from 'react';

import useForm from '../hooks/useForm';

import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Form = () => {

    const { categorias } = useContext(CategoriasContext);
    const { setBusqueda } = useContext(RecetasContext);

    const [busqueda, setState, handleInputChange] = useForm({
        nombre: '',
        categoria: ''
    });

    const { nombre, categoria } = busqueda;

    const handleSubmit = e => {
        e.preventDefault();

        // Validar...
        // Pendiente

        setBusqueda(busqueda);

        // Limpiando Formulario
        setState({
            nombre: '',
            categoria: ''
        });
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="col-12"
        >
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