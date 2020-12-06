import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { ModalContext } from '../context/ModalContext';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({ receta }) => {

    // Configuración del modal de material ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { idDrink, strDrink, strDrinkThumb } = receta;

    const { infoReceta, setInfoReceta, setIdReceta } = useContext(ModalContext);

    // Muestra y formatea los ingredientes
    const mostrarIngredientes = info => {

        let ingredientes = [];

        for (let i = 1; i < 16; i++) {
            if (info[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={i}>
                        {info[`strIngredient${i}`]}
                        {info[`strMeasure${i}`]}
                    </li>
                );
            }
        }

        return ingredientes;
    };

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
                        onClick={() => {
                            setIdReceta(idDrink);
                            handleOpen();
                        }}
                    >
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            handleClose();
                            setInfoReceta({});
                            setIdReceta(null);
                        }}
                        style={{ fontSize: 10 }}
                    >
                        <div
                            className={classes.paper}
                            style={modalStyle}
                        >
                            <h2>{infoReceta.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>{infoReceta.strInstructions}</p>

                            <img
                                className="img-fluid my-4"
                                src={infoReceta.strDrinkThumb}
                                alt={`Imagen de ${infoReceta.strDrink}`}
                                style={{ height: '100px' }}
                            />

                            <h3>Ingredientes y cantidades</h3>
                            <ul>
                                {mostrarIngredientes(infoReceta)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

Receta.propTypes = {
    receta: PropTypes.object.isRequired
};

export default Receta;