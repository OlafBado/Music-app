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
                setTimeout(() => setFavourites(filteredArray), 800)
            } else {
                setFavourites(filteredArray)
            }
        } else {
            setFavourites([...favourites, id])
        }
    }

    return (
                <tr className={active && hide ? 'act' : ''}>
                    <td>
                        <div className='album-img-container'>
                            <img alt='' src={song["im:image"][0].label}/>
                            <a href={song.link.attributes.href} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    data-testid="svgPlayElement"
                                />
                            </a>
        
                        </div>
                    </td>
                    <td>{song["im:name"].label}</td>
                    <td>{song["im:artist"].label}</td>
                    <td className="d-none d-sm-table-cell">{song.category.attributes.label}</td>
                    <td className='td-svg'>
                        <FontAwesomeIcon
                            style={favourites.includes(song.id.attributes["im:id"]) ? {opacity: '1'} : {}}
                            onClick={() => handleFavourites(song.id.attributes["im:id"])}
                            icon={favourites.includes(song.id.attributes["im:id"]) ? faHeartSolid : faHeart}
                            data-testid="svgElement"
                        />
                    </td>
                    <td className="d-none d-md-table-cell">{song["im:releaseDate"].attributes.label}</td>
                </tr>
    )
}

export default Album
