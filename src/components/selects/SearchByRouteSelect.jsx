import React from "react";
import PropTypes from "prop-types"

const SearchByInput = (props) => {
    const { values, searchLabel, id, onChange, isActive, valueLabel, valueId } = props
    const handleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <div className={`container mt-4 ${isActive ? 'is-block' : 'is-hidden'}`}>
            <div className="tile is-ancestor ">
                <div className="tile is-2" />
                <div className="tile">
                    <div className={`select is-rounded`}>
                        <select id={id} onChange={handleChange}>
                            <option>{searchLabel}</option>
                            {values.map(value =>
                                <option key={value[valueId]} value={value[valueId]}>{value[valueLabel]}
                                </option>
                            )}
                        </select>
                    </div>
                    <label htmlFor={id} className="visually-hidden">
                        {searchLabel}
                    </label>
                </div>
                <div className="tile is-2" />
            </div>
        </div>
    );
};

SearchByInput.propTypes = {
    searchLabel: PropTypes.string,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

SearchByInput.defaultProps = {
    searchLabel: "",
    id: "select-default"
}

export default SearchByInput;