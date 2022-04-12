import axios from "axios"

const getStops = async (route, direction) => {
    const response = await axios.get(`https://svc.metrotransit.org/nextripv2/stops/${route}/${direction}`)
    return response
}

export const getStopsById = async (route_id) => {
    const response = await axios.get(`https://svc.metrotransit.org/nextripv2/${parseInt(route_id)}`)
    return response
}

export default getStops

