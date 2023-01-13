import './CampoTexto.css'

import React from 'react'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    obrigatorio: boolean
    label: string
    placeHolder: string
    valor: string

}

const CampoTexto = ({obrigatorio, label, placeHolder, valor , aoAlterado} :CampoTextoProps) => {

    const placeholderModificada = `${placeHolder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={ evento => aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto