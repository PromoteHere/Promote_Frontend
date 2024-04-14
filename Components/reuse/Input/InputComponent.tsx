import React from 'react';
import './InputComponent.css'
interface InputComponent {
    label: string,
    type: string,
    onClick:()=>void
}
const InputComponent = (props: any): JSX.Element => {
    return (
        <div className='inputContainer'>
            {props?.label && <div>{props?.label} </div>}
            <div>
                <input className='inputCls' type={props?.type} onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default InputComponent;