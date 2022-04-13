import axios from "axios"

export const getTripByRouteDirectionStop = async (route_id, direction_id, stop_id) => {
    const response = await axios.get(`https://svc.metrotransit.org/nextripv2/${route_id}/${parseInt(direction_id)}/${stop_id}`)
    return response
}

export const getTripByStopId = async (stop_id) => {
    const response = await axios.get(`https://svc.metrotransit.org/nextripv2/${parseInt(stop_id)}`)
    return response
}