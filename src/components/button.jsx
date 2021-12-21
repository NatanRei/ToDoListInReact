import React from 'react';
import P from 'prop-types';
import './button.css';
const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className='button'>{children}</button>
      );
}

export default Button;

Button.propTypes = {
  children: P.string,
  onClick: P.func

}
