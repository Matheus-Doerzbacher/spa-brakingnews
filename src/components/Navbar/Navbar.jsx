import logo from '../../images/logo.png'
import { buscar } from '../../Icons'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <div className='icon-search'>{buscar}</div>
                    <input type="text" placeholder='Pesquise por um titulo'/>
                </div>

                <img src={logo} alt="Logo do Breaking News" />

                <button>Entrar</button>
                
            </nav>
        </>
    )
}