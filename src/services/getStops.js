import axios from "axios"

const getStops = async (route, direction) => {
    const response = await axios.get(`https://svc.metrotransit.org/nextripv2/stops/${route}/${direction}`)
    return response
}


export default getStops

