import { SortIconProps } from "../../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

const SortIconArtist = ({ sortBy, handleSortBy }: SortIconProps) => {
    return (
        <button onClick={() => handleSortBy('artist-descending')}>
            Artist
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
    )
}

export default SortIconArtist