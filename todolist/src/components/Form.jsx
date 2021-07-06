import React from 'react'

export default function Form(props) {

    function criarTarefa(e){
        e.preventDefault()

        const novoTitulo = e.target[0].value
        const novoTexto = e.target[1].value

        props.onSubmit(novoTitulo, novoTexto)

        e.target[0].value = ""
        e.target[0].focus()
        e.target[1].value = ""
    }

    return (
        <div className="Form-wrap">
            <form className="Form" onSubmit={criarTarefa}>
                <input type="text" placeholder="Titulo"  required/>
                <textarea placeholder="Digite sua tarefa" required></textarea>
                <button>Nova Tarefa</button>
            </form>
        </div>
    )
}
