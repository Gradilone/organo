import { useState } from 'react'
import './campoTexto.css'
const CampoTexto = (props) => {

    // let valor = 'Lucas Gradilone'
    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    const placeholderModifica = `${props.placeholder}...`;
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder= {placeholderModifica}/>
        </div>
    )
}

export default CampoTexto;