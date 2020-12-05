import React from 'react';

const Form = () => {
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
                    />
                </div>

                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">-- Seleciona Categoría --</option>
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
        </form>
    );
};

export default Form;