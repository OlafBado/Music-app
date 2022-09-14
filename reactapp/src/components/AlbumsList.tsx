import Album from './Album'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { AlbumsListProps, Song } from '../store';
import ReactDOM from 'react-dom';

const AlbumsList = ({ songs, favourites, setFavourites, active }: AlbumsListProps) => {

    const handleFavourites = (songs: Song[], favourites: string[], active: Boolean) => {
        if (active) {
            const newArray = songs.filter(song => favourites.includes(song.id.attributes["im:id"]))
            return newArray
        } else {
            return songs
        }
    }

    if (active && favourites.length === 0) 
    return <h2 className='list-empty'>You don't have any favourite albums...</h2>

    return(
        <>
            <Container className='text-white mt-5' id='abc'>
                <Table variant='dark' hover>
                    <thead>
                        <tr>
                            <th style={{width: '10%'}}></th>
                            <th style={{width: '25%'}}>Album</th>
                            <th style={{width: '25%'}}>Artist</th>
                            <th style={{width: '10%'}} className="d-none d-sm-table-cell">Category</th>
                            <th style={{width: '10%'}}></th>
                            <th style={{width: '20%'}} className="d-none d-md-table-cell">Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            handleFavourites(songs, favourites, active).map((song: Song) => {
                                return (
                                    <Album
                                        key={song.id.attributes["im:id"]}
                                        song={song}
                                        favourites={favourites}
                                        setFavourites={setFavourites}
                                    />
                                    )
                                }
                            )
                        }
                    </tbody>
                </Table>
            </Container> 
        </>

    )
}

export default AlbumsList