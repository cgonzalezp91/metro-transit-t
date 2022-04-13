
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types"

function SearchByStopInput(props) {
    const { id, searchLabel, isActive, onClick } = props
    const handleClick = () => {
        const inputValue = document.getElementById(id).value
        if (inputValue !== searchLabel) {
            onClick(inputValue)
        }
    }
    const searchMagnify = <FontAwesomeIcon icon={faMagnifyingGlass} />
    return (
        <div className={`container ${isActive ? 'is-block' : 'is-hidden'}`}>
            <div className='field has-addons'>
                <input data-testid="search-by-input" className="input" type="text" id={id} placeholder={searchLabel}></input>
                <button className="button" onClick={handleClick}>
                    <span className="icon is-small">
                        {searchMagnify}
                    </span>
                </button>
                <label className="visually-hidden" htmlFor={id}>{searchLabel}</label>
            </div>
        </div>
    );
}

SearchByStopInput.propTypes = {
    searchLabel: PropTypes.string,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isActive: PropTypes.bool.isRequired
}

SearchByStopInput.defaultProps = {
    searchLabel: "",
    id: "input-default"
}

export default SearchByStopInput;