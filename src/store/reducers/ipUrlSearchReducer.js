import Actions from "../actionTypes"

const initialState = {
    ipUrlSearchPending: false,
    ipUrlSearchData: {},
    ipUrlSearchError: false,
    ipUrlSearchDataHistory: []
}

const ipUrlSearchActions = Actions.ipUrlSearch

const ipUrlSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ipUrlSearchActions.getIpUrlPending: 
            return {
                ...state,
                ipUrlSearchPending: true
            }
        case ipUrlSearchActions.getIpUrlError: 
            return {
                ...state,
                ipUrlSearchPending: false,
                ipUrlSearchError: true
            }
        case ipUrlSearchActions.getIpUrlSuccess:
            return {
                ...state,
                ipUrlSearchPending: false,
                ipUrlSearchError: false,
                ipUrlSearchData: action.payload,
                ipUrlSearchDataHistory: [...state.ipUrlSearchDataHistory, action.inputValue]
            }
    
        default: 
            return state
        
    }

}
export default ipUrlSearchReducer