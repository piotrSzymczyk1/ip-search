import axios from "axios"
import API_ENDPOINTS from "../apiEndpoints"

const getIpLocationService = async () => {
//NOTE: Client IP lookup
    try{
        const responseValue = await axios.get(
            `${API_ENDPOINTS.IP_LOCATION_SEARCH}`
        )
        if(responseValue){
            return {
                status: "SUCCESS",
                response: responseValue
            }
        }
    }catch (error) {
        return {
            status: "ERROR",
            response: error
        }
    }
}

export { getIpLocationService }