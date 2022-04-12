import "./buttons.css"
import PropTypes from "prop-types"


const SearchByButton = (props) => {
    function handleClick(event) {
        props.onClick(event.target.value);
    }
    return ( 
        <div className="container">
            <button data-test="routes-button" onClick={handleClick} value={"route"} className={`nextrip-tab ${props.searchBy === "route" ? "active" : ""}`}>By route</button>
            <button data-test="stops-button" onClick={handleClick} value={"stop#"} className={`nextrip-tab ${props.searchBy === "stop#" ? "active" : ""}`}>By stop #</button>
        </div>
     );
}

SearchByButton.propTypes = {
    searchBy: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

SearchByButton.defaultProps = {
    searchBy: "route"
}
 
export default SearchByButton;