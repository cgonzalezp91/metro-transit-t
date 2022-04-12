import axios from "axios"

const getDirections = async (routeId) => {
    const response = await axios.get(`https://svc.metrotransit.org/nextripv2/directions/${routeId}`)
    return response
}

export default getDirections

