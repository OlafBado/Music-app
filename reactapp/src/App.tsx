import { Container } from 'react-bootstrap';
import AlbumsList from './components/AlbumsList'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Spinner from './components/Spinner'
import { useState, useEffect } from 'react'
import './assets/global.css'
import { fetchData } from './api/axios'
import { Data, Song } from './store';
import { number } from './utils/mutate/number'

const App: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(true)
  const [data, setData] = useState<Data | any>()
  const [songs, setSongs] = useState<Song[]>([])
  const [searchResults, setSearchResults] = useState<Song[]>([])
  const [favourites, setFavourites] = useState<string[]>(JSON.parse(localStorage.getItem('favourites') || '[]'))
  const [active, setActive] = useState<Boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      fetchData().then(json => {
        const array = number(json.entry)
        setSongs(array)
        return json
      }).then(json => {
        setSearchResults(json.entry)
        return json
      }).then(json => {
        setData(json)
        setLoading(false)
        return json
      })
    }, 2000)
  }, [])
  
  useEffect(() => {
    window.localStorage.setItem('favourites', JSON.stringify(favourites))
   }, [favourites])

  return (
    <>
        {
          loading ? (
            <Spinner />
          ) : (
            <Container>
              <Navbar
                logo={data.icon.label}
                uri={data.author.uri.label}
                active={active}
                setActive={setActive}
              />
              <Main
                title={data.title.label}
                songs={songs}
                setSearchResults={setSearchResults}
              />
              <AlbumsList
                songs={searchResults}
                favourites={favourites}
                setFavourites={setFavourites}
                active={active}
              />
            </Container>
          )
        }
    </>
  );
}

export default App;
