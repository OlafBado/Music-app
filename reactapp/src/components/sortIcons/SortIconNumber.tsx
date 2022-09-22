import { SortIconProps } from "../../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

const SortIconNumber = ({ sortBy, handleSortBy }: SortIconProps) => {
    return (
        <button onClick={() => handleSortBy('reverse')}>
            Place
            <FontAwesomeIcon icon={
                sortBy === 'default' 
                ?
                faSortDown
                :
                sortBy === 'reverse'
                ?
                faSortUp
                :
                faSort
                } 
            />
        </button>
    )
}

export default SortIconNumber