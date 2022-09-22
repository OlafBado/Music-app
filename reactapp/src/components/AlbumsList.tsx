import Album from './Album'
import SortDropdown from './SortDropdown'
import SortIconNumber from './sortIcons/SortIconNumber'
import SortIconAlbum from './sortIcons/SortIconAlbum'
import SortIconArtist from './sortIcons/SortIconArtist'
import SortIconCategory from './sortIcons/SortIconCategory'
import SortIconReleaseDate from './sortIcons/SortIconReleaseDate'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { AlbumsListProps, Song } from '../store';
import { useState } from 'react';
import { albumsDescending, albumsAscending, artistDescending, artistAscending, categoryDescending, categoryAscending, dateDescending, dateAscending } from '../utils/sort/sort'
import { animated, useTransition } from 'react-spring';

const AlbumsList = ({ songs, favourites, setFavourites, active }: AlbumsListProps) => {
    const [sortBy, setSortBy] = useState<String>('default')
    const [isVisible, setIsVisible] = useState<Boolean>(false)
    const [isOpen, setIsOpen] = useState<Boolean>(false)

    const transition = useTransition(isVisible, {
        from: {  y:-80, opacity: 0 },
        enter: { y:0, opacity: 1 },
        leave: { y:-80, opacity: 0 }
    })

    const handleFavourites = () => {
        
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
            } else if (sortBy === 'reverse') {
                const newArray = favouriteArray.reverse()
                return newArray
            } else {
                return favouriteArray
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
            } else if (sortBy === 'reverse') {
                const newArray = arrayCopy.reverse()
                return newArray
            }
        }

        return songs 
    }

    const handleSortBy = (by: string) => {
        if (by === 'default') {
            setSortBy(by)
            setIsVisible(false)
        } else if (by === 'album-descending') {
            setIsVisible(true)
            if (sortBy === 'album-descending') {
                setSortBy('album-ascending')
            } else {
                setSortBy(by)
            }
        } else if (by === 'artist-descending') {
            setIsVisible(true)
            if (sortBy === 'artist-descending') {
                setSortBy('artist-ascending')
            } else {
                setSortBy(by)
            }
        } else if (by === 'category-descending') {
            setIsVisible(true)
            if (sortBy === 'category-descending') {
                setSortBy('category-ascending')
            } else {
                setSortBy(by)
            }
        } else if (by === 'date-descending') {
            setIsVisible(true)
            if (sortBy === 'date-descending') {
                setSortBy('date-ascending')
            } else {
                setSortBy(by)
            }
        } else if (by === 'reverse') {
            if (sortBy === 'reverse') {
                setIsVisible(false)
                setSortBy('default')
            } else {
                setIsVisible(true)
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
                            <th>
                                <span>
                                    <SortIconNumber sortBy={sortBy} handleSortBy={handleSortBy}/>
                                </span>
                            </th>
                            <th className='but'>
                                {transition((style, item) => 
                                    item ? <animated.button onClick={() => handleSortBy('default')} className='reset-button' style={style}>Reset</animated.button> : ''
                                )}
                            </th>
                            <th>
                                <span>
                                    <SortIconAlbum sortBy={sortBy} handleSortBy={handleSortBy}/>
                                </span>
                                <SortDropdown sortBy={sortBy} handleSortBy={handleSortBy} />
                            </th>
                            <th>
                                <span>
                                    <SortIconArtist sortBy={sortBy} handleSortBy={handleSortBy}/>
                                </span>
                            </th>
                            <th>
                                <span>
                                    <SortIconCategory sortBy={sortBy} handleSortBy={handleSortBy}/>
                                </span>
                            </th>
                            <th></th>
                            <th>
                                <span>
                                    <SortIconReleaseDate sortBy={sortBy} handleSortBy={handleSortBy}/>
                                </span>
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