import { Container } from 'react-bootstrap';
import SearchBar from './SearchBar'
import { MainProps } from '../store'

const Main = ({ title, songs, setSearchResults }: MainProps) => {
    return(
        <Container className='text-white d-flex flex-sm-row flex-column gap-3 main-container'>
                <img 
                    src='https://is5-ssl.mzstatic.com/image/thumb/Features114/v4/13/cc/fd/13ccfda7-ddae-50cc-3359-64cb91dcb9de/U0MtTVMtV1ctVG9wXzEwMF9HbG9iYWwtQURBTV9JRD0xNDEyOTk0OTk4LnBuZw.png/200x200cc.webp'
                    height='250px'
                    width='250px'
                    className='rounded align-self-center'
                    alt=""
                />
                <div className="align-self-center justify-content-center d-flex flex-column gap-3">
                    <h2 className="align-self-center fw-bold">{title}</h2>
                    <p>The most popular albums from around the world, updated every day.</p>  
                    <SearchBar
                        songs={songs}
                        setSearchResults={setSearchResults}
                    />
                </div>
        </Container>
    )
}

export default Main