import { Footer, Header, Secao, FiltroSecao } from '@components';
import produtos from '@services/produtos.json';
import { array } from 'prop-types';
import styles from './App.module.css';
import { useState } from 'react';


const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
  const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));

  let secoes = [
    {
      nome: "Entradas",
      itens: produtos.entradas,
      subSecoes: Array.from(subSecoesEntradas)
    },
    {
      nome: "Principais",
      itens: produtos.principais,
      subSecoes: Array.from(subSecoesPrincipais)
    },
    {
      nome: "Sobremesas",
      itens: produtos.sobremesas,
    }
  ]

function App() {
  const [filtro, setFiltro] = useState(null)

  const handleSelecionarSecao = (titulo) => {
    console.log(titulo)
    if(filtro === titulo){
      setFiltro(null)
    }else{
      setFiltro(titulo)
    }
  };

  const secoesFiltradas = filtro ? secoes.filter((secao) => secao.nome === filtro) : secoes

  return (
    <div className={styles.app}>
      <Header />
      <FiltroSecao secoes={secoes} onSelecionarSecao={handleSelecionarSecao}/>
      <main className={styles.main}>
        {
          secoesFiltradas.map((secao)=> (
            <Secao 
              key={secao.nome}
              nome={secao.nome}
              produtos={secao.itens}
              subSecoes={secao.subSecoes && Array.from(secao.subSecoes)}
            />
          ))
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
