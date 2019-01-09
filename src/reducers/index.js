import { combineReducers } from 'redux';
import  videosReducer  from './videos-reducers';
const videoStreamApp = combineReducers({
    videosReducer
})

export default videoStreamApp