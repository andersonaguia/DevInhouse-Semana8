import PropTypes from 'prop-types'
import styles from './FiltroSecao.module.css';

export const FiltroSecao = ({secoes = [], onSelecionarSecao}) => {
    return(
        <div>
            <ul className={styles.ul}>
                {
                    secoes.map((secao) => (
                        <li key={secao.nome}>
                            <button onClick={() => {onSelecionarSecao(secao.nome)}}>{secao.nome}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )
}

FiltroSecao.propTypes = {
    secoes: PropTypes.arrayOf(
        PropTypes.shape({
            nome: PropTypes.string
        })
    ),
    onSelecionarSecao: PropTypes.func.isRequired
}