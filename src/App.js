import { useState } from 'react';
import Banner from './components/Banner/banner';
import Formulario from './components/Formulario';
import Nacao from './components/Nacao';

function App() {

  const nacoes = [
    {
      nome: 'Nomadês do Ar',
      corPrimaria: '#F7E087',
      corSecundaria: '#F7E6A9'
    },

    {
      nome: 'Tribo da Água',
      corPrimaria: '#5BA2D3',
      corSecundaria: '#A2C9E2'
    },
    {    
      nome: 'Nação do Fogo',
      corPrimaria: '#F62D2D',
      corSecundaria: '#F68988'

    },
    {     
      nome: 'Nação da Terra',
      corPrimaria: '#A9D098',
      corSecundaria: '#CBE4C5'
    },
    {
      nome: 'Reino Espiritual',
      corPrimaria: '#A65FA6',
      corSecundaria: '#CBA3C9'
    }
]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    debugger
    console.log(personagem)
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">

      <Banner></Banner>
      <Formulario nacoes={nacoes.map(nacao => nacao.nome)}
      
      aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}></Formulario>

      {nacoes.map(nacao => <Nacao 
      key={nacao.nome} nome={nacao.nome} 
      corPrimaria={nacao.corPrimaria} 
      corSecundaria={nacao.corSecundaria}
      personagens={personagens.filter(personagem => personagem.nacao === nacao.nome)}/>)}


      
    </div>
  );
}

export default App;
