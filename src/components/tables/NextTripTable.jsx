import PropTypes from "prop-types"

const NextTripTable = (props) => {
    const { isActive, tripValues } = props
    let DeparturesData
    if (tripValues?.departures && tripValues.departures.length > 0) {
        DeparturesData = tripValues.departures.map(departure => {
            return (
                <tr key={departure?.trip_id+1}>
                    <td key={departure?.trip_id+1}>{`${departure.route_short_name}${departure?.terminal || ""}`}</td>
                    <td key={departure?.trip_id+2}>{departure.description}</td>
                    <td key={departure?.trip_id+3}>{departure.departure_text}</td>
                </tr>
            )
        })
    } else {
        DeparturesData = (
            <tr key="no-departures-tr">
                <td colSpan="3" key="no-departures-td">
                    No departures at this time
                </td>
            </tr>
        )
    }

    return (
        <div className={`container mt-4 ${isActive ? "is-block" : "is-hidden"}`}>
            <div className="container is-flex is-justify-content-space-between">
                <h2 className="subtitle has-text-weight-bold">
                    {tripValues?.stops?.[0]?.description ?? ""}
                </h2>
                <span>
                    <strong>Route#:</strong> {tripValues?.stops?.[0]?.stop_id ?? ""}
                </span>
            </div>
            <table className="table is-bordered is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr className="has-background-warning">
                        <th>ROUTE</th>
                        <th>DESTINATION</th>
                        <th>DEPARTS</th>
                    </tr>
                </thead>
                <tbody>
                    {DeparturesData}
                </tbody>
            </table>
        </div>
    );
};

NextTripTable.propTypes = {
    tripValues: PropTypes.object,
    isActive: PropTypes.bool.isRequired
}

NextTripTable.defaultProps = {
    isActive: false,
}

export default NextTripTable;