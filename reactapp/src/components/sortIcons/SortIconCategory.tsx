import { SortIconProps } from "../../store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons"

const SortIconCategory = ({ sortBy, handleSortBy }: SortIconProps) => {
    return (
        <button onClick={() => handleSortBy('category-descending')}>
            Category
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
                data-testid="svgCategory"
            />
        </button>
    )
}

export default SortIconCategory