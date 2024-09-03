import "./formulario.css"
import CampoTexto from "../CampoTexto"
import Lista from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [elemento, setElemento] = useState('')
    const [imagem, setImagem] = useState('')
    const [nacao, setNacao] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            elemento,
            imagem,
            nacao
        })
        setNome('')
        setElemento('')
        setImagem('')
        setNacao('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os dados do dominador</h2>
                <CampoTexto 
                obrigatorio={true}
                label="Nome"
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                >
                </CampoTexto>

                <CampoTexto 
                obrigatorio={true} 
                label="Elemento Dominador" placeholder="Digite sua habilidade"
                valor={elemento}
                aoAlterado={valor => setElemento(valor)}
                >
                </CampoTexto>

                <CampoTexto 
                label="Imagem" 
                placeholder="Digite seu endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                >
                </CampoTexto>

                <Lista 
                obrigatorio={true}  
                label='Nação' 
                itens={props.nacoes}
                value={nacao}
                aoAlterado={valor => setNacao(valor)}
                ></Lista>
                <Botao> Criar Card</Botao>
            </form>
        </section>

    )
}

export default Formulario