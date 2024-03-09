import React from 'react'
import './Fbutton.css';

const FalconButton = ({ type, name, onClick }: any) => {
    
    return (
        <div>
            <button className={type} onClick={onClick}>{name}</button>
        </div>
    )
}

export default FalconButton; 