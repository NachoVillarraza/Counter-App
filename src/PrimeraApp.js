import React from 'react';
import PropTypes from 'prop-types';

function PrimeraApp({ saludo, subtitulo }) {
  return (
    <div>
      <h1>{saludo}</h1>
      <p>Mi PrimeraApp con React</p>
    </div>
  );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un Subtitulo',
};

export default PrimeraApp;
