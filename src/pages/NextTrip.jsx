import { useEffect, useState } from 'react';
import SearchByRouteButton from '../components/buttons/SearchByRouteButton';
import SearchByRouteSelect from '../components/selects/SearchByRouteSelect';
import getRoutes from '../services/getRoutes';
import getDirections from '../services/getDirections';
import getStops from '../services/getStops';
import { getTripByRouteDirectionStop, getTripByStopId } from '../services/getTrip';
import SearchByStopInput from '../components/inputs/SearchByStopInput';
import NextTripTable from '../components/tables/NextTripTable';
import CenterTile from '../components/tiles/CenterTile';
// import routes from './mocks/routes';
// import directions from './mocks/directions';

function NextTrip() {
    const [searchBy, setsearchBy] = useState("route")
    const [isActiveObj, setisActiveObj] = useState({
        "selectRoute": true,
        "selectDirection": false,
        "selectStop": false,
        "inputStop": false,
        "tableNextTrip": false
    })

    const [selectedSearchObject, setselectedSearchObject] = useState({})

    const [routeValues, setrouteValues] = useState([])
    const [directionValues, setdirectionValues] = useState([])
    const [stopValues, setstopValues] = useState([])

    const [tripValues, settripValues] = useState({})

    useEffect(() => {
        searchRoutes()
    }, [])

    const searchRoutes = async () => {
        const routes = await getRoutes()
        setrouteValues(routes.data)
    }
    const updateSearchBy = (id) => {
        setsearchBy(id);
        if (id === "route") {
            setisActiveObj(prevState => ({
                ...prevState,
                "inputStop": false,
                "selectRoute": true,
            }))
        } else {
            setisActiveObj(prevState => ({
                ...prevState,
                "inputStop": true,
                "selectDirection": false,
                "selectStop": false,
                "selectRoute": false,
            }))
        }
    }
    const updateSelectedRoute = async (selectedRoute) => {
        const directions = await getDirections(selectedRoute)
        setselectedSearchObject({ 'route': selectedRoute })
        setdirectionValues(directions.data)
        setisActiveObj(prevState => ({
            ...prevState,
            "selectDirection": true,
            "inputStop": false,
            "selectStop": false,
            "tableNextTrip": false
        }))
    }
    const updateSelectedDirection = async (selectedDirection) => {
        const stops = await getStops(selectedSearchObject.route, selectedDirection)
        setselectedSearchObject(prevState => ({
            ...prevState,
            "direction": selectedDirection
        }))
        setisActiveObj(prevState => ({
            ...prevState,
            "selectStop": true,
            "inputStop": false,
            "tableNextTrip": false
        }))
        setstopValues(stops.data)
    }

    const updateSelectedStop = async (stop) => {
        const stops = await getTripByRouteDirectionStop(selectedSearchObject.route, selectedSearchObject.direction, stop)
        settripValues(stops.data)
        setisActiveObj(prevState => ({
            ...prevState,
            "tableNextTrip": true
        }))
    }

    const searchSelectedStop = async (stop_id) => {
        const stops = await getTripByStopId(stop_id)
        settripValues(stops.data)
        setisActiveObj(prevState => ({
            ...prevState,
            "tableNextTrip": true
        }))
    }

    return (
        <div className="section">
            <SearchByRouteButton onClick={updateSearchBy} searchBy={searchBy} />
            <CenterTile>
                <SearchByStopInput
                    id="input-stop"
                    searchLabel="Enter stop number"
                    isActive={isActiveObj.inputStop}
                    onClick={searchSelectedStop}
                />
            </CenterTile>
            <CenterTile>
                <SearchByRouteSelect
                    values={routeValues}
                    searchLabel="Select route"
                    id="select-route"
                    onChange={updateSelectedRoute}
                    isActive={isActiveObj.selectRoute}
                    idValue="route_id"
                    labelValue="route_label"
                />
            </CenterTile>
            <CenterTile>
                <SearchByRouteSelect
                    values={directionValues}
                    searchLabel="Select direction"
                    id="select-direction"
                    onChange={updateSelectedDirection}
                    isActive={isActiveObj.selectDirection}
                    idValue="direction_id"
                    labelValue="direction_name"
                />
            </CenterTile>
            <CenterTile>
                <SearchByRouteSelect
                    values={stopValues}
                    searchLabel="Select stop"
                    id="select-stop"
                    onChange={updateSelectedStop}
                    isActive={isActiveObj.selectStop}
                    idValue="place_code"
                    labelValue="description"
                />
            </CenterTile>
            <CenterTile>
                <NextTripTable
                    isActive={isActiveObj.tableNextTrip}
                    tripValues={tripValues}
                />
            </CenterTile>
        </div>
    );
}

export default NextTrip;
