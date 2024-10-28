import './style.css';

const textOptions = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function OptionsHeader() {
  return(
    <ul className='opcoes'>
      { textOptions.map( (text) => (
        <li className='opcao'><p>{text}</p></li>
      ) ) }
    </ul>
  )
}

export default OptionsHeader;