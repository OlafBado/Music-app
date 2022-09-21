import { Container, Navbar as NavbarBS } from 'react-bootstrap'
import { NavbarProps } from '../store'

const Navbar = ({ logo, uri, active, setActive }: NavbarProps) => {

    const handleActive = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    return (
            <NavbarBS fixed='top' bg="dark" variant="dark">
        <Container>
                <NavbarBS.Brand href={uri} target="_blank" rel="noreferrer">
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        alt=''
                    />
                    Music    
                </NavbarBS.Brand>
                <button
                    onClick={() => handleActive()}
                    className={active ? 'button-favourite active' : 'button-favourite'}
                >
                    Favourites
                </button>
            </Container>
        </NavbarBS>
    )
}

export default Navbar