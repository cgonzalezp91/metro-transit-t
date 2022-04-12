import axios from "axios"

const getRoutes = async () => {
    const response = await axios.get('https://svc.metrotransit.org/nextripv2/routes')
    return response
}

export default getRoutes

