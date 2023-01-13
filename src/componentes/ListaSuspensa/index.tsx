import './ListaSuspensa.css'
import React from 'react'

interface ListaSuspensaProps {
    required: boolean
    label: string
    valor: string
    itens: string[]
    aoAlterado: (valor: string) => void

}

const ListaSuspensa = ({aoAlterado, itens, label, required, valor} :ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select onChange={evento => aoAlterado(evento.target.value)} required={required} value={valor}>
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa