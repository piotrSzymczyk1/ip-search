import Actions from "../actionTypes";
import { getIpUrlSearchService } from '../../services/ipUrlSearch/ipUrlSearchService'

const Action = Actions.ipUrlSearch;

const getIpUrlSearchPending = () => ({
    type: Action.getIpUrlnPending,
})

const getIpUrlSearchSuccess = (ipUrl, inputValue) => ({
    type: Action.getIpUrlSuccess,
    payload: ipUrl,
    inputValue: inputValue
})

const getIpUrlSearchError = () => ({
    type: Action.getIpUrlError,
})

const getIpUrlSearch = (inputValue) => async (dispatch) => {
    dispatch(getIpUrlSearchPending())
    const response = await getIpUrlSearchService(inputValue)
    if(response && response.status === "SUCCESS") {
    //NOTE: Adaptaion for ipstack API which returns success object only on error
    const findSuccessKey = Object.keys(response.response.data).find(obj => obj.includes("success"))
        if(findSuccessKey && !response.response.data.success){
            dispatch(getIpUrlSearchError())
        }else{
            dispatch(getIpUrlSearchSuccess(response.response.data, inputValue))
        }
    }else{
        dispatch(getIpUrlSearchError())
    }
}

export { getIpUrlSearch }