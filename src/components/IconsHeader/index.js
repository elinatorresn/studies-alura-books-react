import './style.css';

import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';

const icons = [perfil, sacola]

function IconsHeader() {
  return(
    <ul className='icones'>
      { icons.map( (icon) => (
        <li className='icon'><img src={icon}></img></li>
      ) ) }
    </ul>
  )
}

export default IconsHeader