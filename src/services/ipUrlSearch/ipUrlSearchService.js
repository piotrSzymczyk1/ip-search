import axios from "axios"
import API_ENDPOINTS from "../apiEndpoints"
import { ipStackApiKey } from "../apiEndpoints"

const getIpUrlSearchService = async (str) => {
//NOTE: str variable represents either IP or URL address
    try{
        const responseValue = await axios.get(
            `${API_ENDPOINTS.IP_URL_SEARCH}${str}?access_key=${ipStackApiKey}`
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

export { getIpUrlSearchService }