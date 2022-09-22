import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { AlbumProps } from '../store'
import { useState } from 'react'

const Album = ({ song, favourites, setFavourites, active }: AlbumProps) => {

    const [hide,setHide] = useState<Boolean>(false)
    
    const handleFavourites = (id: string) => {
        if (favourites.includes(id)) {
            const filteredArray = favourites.filter(fav => fav !== id)
            if (active) {
                setHide(true)
                setTimeout(() => setFavourites(filteredArray), 200)
            } else {
                setFavourites(filteredArray)
            }
        } else {
            setFavourites([...favourites, id])
        }
    }

    return (
                <tr className={active && hide ? 'act' : ''}>
                    <td>{song.number}</td>
                    <td>
                        <div className='album-img-container'>
                            <img alt='' src={song["im:image"][2].label}/>
                            <a href={song.link.attributes.href} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    data-testid="svgPlayElement"
                                />
                            </a>
        
                        </div>
                    </td>
                    <td className='hidden-cell'>
                        <div>
                            <span><b>Album:</b> {song["im:name"].label}</span>
                            <span><b>Artist:</b> {song["im:artist"].label}</span>
                            <span><b>Category:</b> {song.category.attributes.label}</span>
                            <span><b>ReleaseDate:</b> {song["im:releaseDate"].attributes.label}</span>
                        </div>
                    </td>
                    <td>{song["im:name"].label}</td>
                    <td>{song["im:artist"].label}</td>
                    <td>{song.category.attributes.label}</td>
                    <td className='td-svg' data-testid="td-svg">
                    {favourites.includes(song.id.attributes["im:id"]) ?
                        <FontAwesomeIcon
                            style={favourites.includes(song.id.attributes["im:id"]) ? {opacity: '1'} : {}}
                            onClick={() => handleFavourites(song.id.attributes["im:id"])}
                            icon={faHeartSolid}
                            data-testid="svgSolidElement"
                        />
                    
                    :
                    <FontAwesomeIcon
                            style={favourites.includes(song.id.attributes["im:id"]) ? {opacity: '1'} : {}}
                            onClick={() => handleFavourites(song.id.attributes["im:id"])}
                            icon={faHeart}
                            data-testid="svgElement"
                            className='svgEmptyElement'
                        />
                    }
                    </td>
                    <td>{song["im:releaseDate"].attributes.label}</td>
                </tr>
    )
}

export default Album
