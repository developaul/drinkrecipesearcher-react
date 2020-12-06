import React from 'react';
import PropTypes from 'prop-types';

const Receta = ({ receta }) => {

    const { strDrink, strDrinkThumb } = receta;

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <div className="card-header">
                    {strDrink}
                </div>

                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />

                <div className="card-body">
                    <button
                        className="btn btn-block btn-primary"
                        type="button"
                    >
                        Ver Receta
                    </button>
                </div>
            </div>
        </div>
    );
};

Receta.propTypes = {
    receta: PropTypes.object.isRequired
};

export default Receta;