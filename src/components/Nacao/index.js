import Colaborador from '../Colaborador'
import './nacao.css'
const Nacao = (props) => {

    const background = {backgroundColor: props.corSecundaria}
    const linha = {borderColor: props.corPrimaria}
    return (
        (props.personagens.length > 0) ? <section className='nacao' style={background}>
            <h3 style={linha}>{props.nome}</h3>
            <div className='personagens'>
                {props.personagens.map(personagem => <Colaborador key={personagem.nome} nome={personagem.nome} corDeFundo={props.corPrimaria} elemento={personagem.elemento} imagem={personagem.imagem}></Colaborador>)}
            </div>            
        </section>
        : ''
    )
}

export default Nacao