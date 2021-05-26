import Actions from "../actionTypes";
import { getIpLocationService } from '../../services/ipLocationSearch/ipLocationSearchService'

const Action = Actions.ipLocationSearch;

const getIpLocationPending = () => ({
    type: Action.getIpLocationPending,
})

const getIpLocationSuccess = (ipLocation) => ({
    type: Action.getIpLocationSuccess,
    payload: ipLocation
})

const getIpLocationError = () => ({
    type: Action.getIpLocationError,
})

const getIpLocation = () => async (dispatch) => {
    dispatch(getIpLocationPending())
    const response = await getIpLocationService()
    if(response && response.status === "SUCCESS") {
    //NOTE: Adaptaion for ipstack API which returns success object only on error
        const findSuccessKey = Object.keys(response.response.data).find(obj => obj.includes("success"))
        if(findSuccessKey && !response.response.data.success){
            dispatch(getIpLocationError())
        }else{
            dispatch(getIpLocationSuccess(response.response.data))
        }
    }else{
        dispatch(getIpLocationError())
    }
}

export { getIpLocation }