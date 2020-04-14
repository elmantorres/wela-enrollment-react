import * as types from "./Enrollment.types"

const initialState = {
    loading: false,
    enrollee: [],
}

function enrollment(state = initialState, action = null) {
    switch (action.type) {
        case types.ADD_ENROLLEE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case types.ADD_ENROLLEE_ERROR:
            return {
                ...state,
                loading: false,
            }

        case types.ADD_ENROLLEE_SUCCESS:
            return {
                ...state,
                enrollee: action.payload,
                loading: false,
            }

        default:
            return state
    }
}

export default enrollment
