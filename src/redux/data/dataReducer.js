const initialState = {
    loading: false,
    allTokens: [],
    allOwnerTokens: [],
    numToken: null,
    error: false,
    errorMsg: "",
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_DATA_REQUEST": 
            return {
                ...initialState,
                loading: true,
            };
        case "CHECK_DATA_SUCCESS":
            return {
                ...initialState,
                loading: false,
                allTokens: action.payload.allTokens,
                allOwnerTokens: action.payload.allOwnerTokens,
                numToken: action.payload.numToken,
            };
        case "CHECK_DATA_FAILED":
            return {
                ...initialState,
                loading: false,
                error: true,
                errorMsg: action.payload
            }
        default: 
            return state;
    };
};

export default dataReducer;