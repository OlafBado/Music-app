import { SortIconProps } from "../../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

const SortIconAlbum = ({ sortBy, handleSortBy }: SortIconProps) => {
    return (
        <button onClick={() => handleSortBy('album-descending')}>
            Album
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
    )
}

export default SortIconAlbum