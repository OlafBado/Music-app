import { SortIconProps } from "../../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

const SortIconReleaseDate = ({ sortBy, handleSortBy }: SortIconProps) => {
    return (
        <button onClick={() => handleSortBy('date-descending')}>
            Release Date
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
    )
}

export default SortIconReleaseDate