import Actions from "../actionTypes"

const initialState = {
    ipLocationPending: false,
    ipLocationData: {},
    ipLocationError: false
}

const ipLocationSearchActions = Actions.ipLocationSearch

const ipLocationSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ipLocationSearchActions.getIpLocationPending: 
            return {
                ...state,
                ipLocationPending: true
            }
        case ipLocationSearchActions.getIpLocationError: 
            return {
                ...state,
                ipLocationPending: false,
                ipLocationError: true
            }
        case ipLocationSearchActions.getIpLocationSuccess: 
            return {
                ...state,
                ipLocationPending: false,
                ipLocationError: false,
                ipLocationData: action.payload
            }

        default: 
            return state
        
    }

}
export default ipLocationSearchReducer