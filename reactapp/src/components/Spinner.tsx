import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic } from "@fortawesome/free-solid-svg-icons"

const Spinner = () => {
    return(
        <div className="spinner-container">
            <FontAwesomeIcon data-testid="svgSpinnerElement" className="spinner-svg down" icon={faMusic} />
            <FontAwesomeIcon className="spinner-svg up" icon={faMusic} />
            <FontAwesomeIcon className="spinner-svg down" icon={faMusic} />
        </div>
    )
}

export default Spinner