
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function SearchByStopInput(props) {
    const { id, searchLabel, isActive, onClick } = props
    const handleClick = (event) => {
        const inputValue = document.getElementById(id).value
        onClick(inputValue)
    }
    const searchMagnify = <FontAwesomeIcon icon={faMagnifyingGlass} />
    return (
        <div className={`container mt-4 ${isActive ? "is-block" : "is-hidden"}`}>
            <div className="tile is-ancestor ">
                <div className="tile is-2" />
                <div className="tile">
                    <input className="input" type="text" id={id} placeholder={searchLabel}></input>
                    <div className="control">
                        <button className="button is-expanded" onClick={handleClick}>
                            <span className="icon is-small">
                            {searchMagnify}
                            </span>
                        </button>
                    </div>
                    <label className="visually-hidden" htmlFor={id}>{searchLabel}</label>
                </div>
                <div className="tile is-2" />
            </div>
        </div>
    );
}

export default SearchByStopInput;