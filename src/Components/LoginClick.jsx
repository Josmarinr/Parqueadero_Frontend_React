import React from 'react';
import PropTypes from 'prop-types';


const loginClick = ({src, alt, name}) => {
    return(
        <div className='loginClick'>
            <img src={src} alt={alt} className='imgLogin' />
            <p className='nombreLogin'>{name}</p>
        </div>
    )
}

loginClick.PropTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

loginClick.defaultProps = {
    alt: 'Imagen',
  };

export default loginClick