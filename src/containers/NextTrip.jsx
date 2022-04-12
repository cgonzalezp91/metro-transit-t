import { useEffect, useState } from 'react';
import SearchByRouteButton from '../components/buttons/SearchByRouteButton';
import SearchByRouteSelect from '../components/selects/SearchByRouteSelect';
import getRoutes from '../services/getRoutes';
import getDirections from '../services/getDirections';
import getStops, {getStopsById} from '../services/getStops';
import SearchByStopInput from '../components/inputs/SearchByStopInput';
// import routes from './mocks/routes';
// import directions from './mocks/directions';

function NextTrip() {
    const [searchBy, setsearchBy] = useState("route")
    const [isActiveObj, setisActiveObj] = useState({"selectRoute":true,"selectDirection":false,"selectStop":false,"inputStop":false})
    
    const [selectedSearchObject, setselectedSearchObject] = useState({})

    const [routeValues, setrouteValues] = useState([])
    const [directionValues, setdirectionValues] = useState([])
    const [stopValues, setstopValues] = useState([])

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
                "inputStop":false,
                "selectRoute":true
            }))
        } else {
            setisActiveObj(prevState => ({
                ...prevState, 
                "inputStop":true,
                "selectDirection":false,
                "selectStop":false,
                "selectRoute":false
            }))
        }
    }
    const updateSelectedRoute = async (selectedRoute) => {
        const directions = await getDirections(selectedRoute)
        setselectedSearchObject({'route':selectedRoute})
        setdirectionValues(directions.data)
        setisActiveObj(prevState => ({...prevState, "selectDirection":true, "inputStop":false}))
        //console.log(selectedRoute)
    }
    const updateSelectedDirection = async (selectedDirection) => {
        const stops = await getStops(selectedSearchObject.route, selectedDirection)
        setselectedSearchObject(prevState => ({...prevState, 'direction':selectedDirection}))
        setisActiveObj(prevState => ({...prevState, "selectStop":true, "inputStop":false}))
        setstopValues(stops.data)
    }

    const updateSelectedStop =async (stop) => {
        const stops = await getStopsById(selectedSearchObject.route, selectedSearchObject.direction, stop)
        //console.log(stops.data)
    }

    const searchSelectedStop =async (stop_id) => {
        const stops = await getStopsById(stop_id)
        //console.log(stops.data)
    }

    return (
        <div className="section">
            <SearchByRouteButton onClick={updateSearchBy} searchBy={searchBy} />
            <SearchByStopInput 
                id="input-stop" 
                searchLabel="Enter stop number"
                isActive={isActiveObj.inputStop}
                onClick={searchSelectedStop}
            />
            <SearchByRouteSelect
                values={routeValues}
                searchLabel="Select route"
                id="select-route"
                onChange={updateSelectedRoute}
                isActive={isActiveObj.selectRoute}
                valueId="route_id"
                valueLabel="route_label"
            />
            <SearchByRouteSelect
                values={directionValues}
                searchLabel="Select direction"
                id="select-direction"
                onChange={updateSelectedDirection}
                isActive={isActiveObj.selectDirection}
                valueId="direction_id"
                valueLabel="direction_name"
            />
            <SearchByRouteSelect
                values={stopValues}
                searchLabel="Select stop"
                id="select-stop"
                onChange={updateSelectedStop}
                isActive={isActiveObj.selectStop}
                valueId="place_code"
                valueLabel="description"
            />
        </div>
    );
}

export default NextTrip;
