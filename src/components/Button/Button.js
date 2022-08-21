import React from 'react'

const Button = ({handleClick, color, children}) => {

    return (
        <button className="btn btn-success" onClick={handleClick} style={{color: color}}>
            {children}
        </button>
    )
}

export default Button