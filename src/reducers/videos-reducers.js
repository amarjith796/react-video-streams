import { GET_VIDEOS, GET_VIDEOS_FULFILLED } from "../actions/videos-actions.js"

const initialState = {
    data: {},
    loading: true
}


const videosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_VIDEOS:
            return {
                ...state,
                loading: true
            }
        case GET_VIDEOS_FULFILLED:
            return {
                ...state,
                loading: false,
                data: payload
            }
        default:
            return state;
    }
}
export default videosReducer;