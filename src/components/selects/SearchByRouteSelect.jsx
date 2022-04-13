import PropTypes from "prop-types"

const SearchByInput = (props) => {
    const { values, searchLabel, id, onChange, isActive, labelValue, idValue } = props
    const handleChange = (event) => {
        if (event.target.value !== searchLabel) onChange(event.target.value)
    }
    return (
        <div className={`container ${isActive ? 'is-block' : 'is-hidden'}`}>
            <div className={`select is-rounded`}>
                <select data-testid="search-by-select" id={id} onChange={handleChange}>
                    <option>{searchLabel}</option>
                    {values.map(value =>
                        <option key={value[idValue]} value={value[idValue]}>{value[labelValue]}
                        </option>
                    )}
                </select>
            </div>
            <label htmlFor={id} className="visually-hidden">
                {searchLabel}
            </label>
        </div>
    );
};

SearchByInput.propTypes = {
    searchLabel: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
    values: PropTypes.array
}

SearchByInput.defaultProps = {
    searchLabel: "",
    id: "select-default",
    values: []
}

export default SearchByInput;