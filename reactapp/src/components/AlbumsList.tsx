import Album from './Album'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { AlbumsListProps, Song } from '../store';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { albumsDescending, albumsAscending, artistDescending, artistAscending, categoryDescending, categoryAscending, dateDescending, dateAscending } from '../utils/sort/sort'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

const AlbumsList = ({ songs, favourites, setFavourites, active }: AlbumsListProps) => {
    const [sortBy, setSortBy] = useState<String>('default')

    const handleFavourites = () => {
        console.log(songs)
        
        if (active) {
            const favouriteArray = songs.filter(song => favourites.includes(song.id.attributes["im:id"]))
            
            if (sortBy === 'album-descending') {
                const newArray = favouriteArray.sort(albumsDescending)
                return newArray
            } else if (sortBy === 'album-ascending') {
                const newArray = favouriteArray.sort(albumsAscending)
                return newArray
            } else if (sortBy === 'artist-descending') {
                const newArray = favouriteArray.sort(artistDescending)
                return newArray
            } else if (sortBy === 'artist-ascending') {
                const newArray = favouriteArray.sort(artistAscending)
                return newArray
            } else if (sortBy === 'category-descending') {
                const newArray = favouriteArray.sort(categoryDescending)
                return newArray
            } else if (sortBy === 'category-ascending') {
                const newArray = favouriteArray.sort(categoryAscending)
                return newArray
            } else if (sortBy === 'date-descending') {
                const newArray = favouriteArray.sort(dateDescending)
                return newArray
            } else if (sortBy === 'date-ascending') {
                const newArray = favouriteArray.sort(dateAscending)
                return newArray
            }
        }

        if (!active) {
            const arrayCopy = songs.slice()
            
            if (sortBy === 'album-descending') {
                const newArray = arrayCopy.sort(albumsDescending)
                return newArray
            } else if (sortBy === 'album-ascending') {
                const newArray = arrayCopy.sort(albumsAscending)
                return newArray
            } else if (sortBy === 'artist-descending') {
                const newArray = arrayCopy.sort(artistDescending)
                return newArray
            } else if (sortBy === 'artist-ascending') {
                const newArray = arrayCopy.sort(artistAscending)
                return newArray
            } else if (sortBy === 'category-descending') {
                const newArray = arrayCopy.sort(categoryDescending)
                return newArray
            } else if (sortBy === 'category-ascending') {
                const newArray = arrayCopy.sort(categoryAscending)
                return newArray
            } else if (sortBy === 'date-descending') {
                const newArray = arrayCopy.sort(dateDescending)
                return newArray
            } else if (sortBy === 'date-ascending') {
                const newArray = arrayCopy.sort(dateAscending)
                return newArray
            }
        }

        // default behavior
        return songs 
    }

    const handleSortBy = (by: string) => {
        if (by === 'reverse') {
            if (sortBy === 'reverse') {
                setSortBy('default')
            } else {
                setSortBy(by)
            }
        } else if (by === 'album-descending') {
            if (sortBy === 'album-descending') {
                setSortBy('album-ascending')
            } else {
                setSortBy(by)
            }
        } else if (by === 'artist-descending') {
            if (sortBy === 'artist-descending') {
                setSortBy('artist-ascending')
            } else {
                setSortBy(by)
            }
        } else if (by === 'category-descending') {
            if (sortBy === 'category-descending') {
                setSortBy('category-ascending')
            } else {
                setSortBy(by)
            }
        } else if (by === 'date-descending') {
            if (sortBy === 'date-descending') {
                setSortBy('date-ascending')
            } else {
                setSortBy(by)
            }
        }
    }

    if (active && favourites.length === 0) 
    return <h2 className='list-empty'>You don't have any favourite albums...</h2>

    return(
        <>
            <Container className='text-white mt-5'>
                <Table variant='dark' hover>
                    <thead>
                        <tr>
                            <th style={{width: '10%'}}></th>
                            <th style={{width: '25%'}}>
                                Album
                                <button onClick={() => handleSortBy('album-descending')}>
                                    <FontAwesomeIcon icon={
                                            sortBy === 'album-descending' 
                                            ?
                                            faSortUp
                                            :
                                            sortBy === 'album-ascending' 
                                            ?
                                            faSortDown
                                            :
                                            faSort
                                        } 
                                    />
                                </button>
                            </th>
                            <th style={{width: '25%'}}>
                                Artist
                                <button onClick={() => handleSortBy('artist-descending')}>
                                    <FontAwesomeIcon icon={
                                            sortBy === 'artist-descending' 
                                            ?
                                            faSortUp
                                            :
                                            sortBy === 'artist-ascending' 
                                            ?
                                            faSortDown
                                            :
                                            faSort
                                        } 
                                    />
                                </button>
                            </th>
                            <th style={{width: '15%'}} className="d-none d-sm-table-cell">
                                Category
                                <button onClick={() => handleSortBy('category-descending')}>
                                    <FontAwesomeIcon icon={
                                            sortBy === 'category-descending' 
                                            ?
                                            faSortUp
                                            :
                                            sortBy === 'category-ascending' 
                                            ?
                                            faSortDown
                                            :
                                            faSort
                                        } 
                                    />
                                </button>
                            </th>
                            <th style={{width: '5%'}}></th>
                            <th style={{width: '20%'}} className="d-none d-md-table-cell">
                                Release Date
                                <button onClick={() => handleSortBy('date-descending')}>
                                    <FontAwesomeIcon icon={
                                            sortBy === 'date-descending' 
                                            ?
                                            faSortUp
                                            :
                                            sortBy === 'date-ascending' 
                                            ?
                                            faSortDown
                                            :
                                            faSort
                                        } 
                                    />
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            handleFavourites().map((song: Song) => {
                                return (
                                    <Album
                                        key={song.id.attributes["im:id"]}
                                        song={song}
                                        favourites={favourites}
                                        setFavourites={setFavourites}
                                        active={active}
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