import logo from '../../images/logo.png'
import { buscar } from '../../Icons'
import { Button, Nav, ImgLogo, InputSpace } from './NavbarStyled'


export default function Navbar() {
    return (
        <>
            <Nav>
                <InputSpace>
                    <i>{buscar}</i>
                    <input type="text" placeholder='Pesquise por um titulo'/>
                </InputSpace>

                <ImgLogo src={logo} alt="Logo do Breaking News" />

                <Button>Entrar</Button>
                
            </Nav>
        </>
    )
}

