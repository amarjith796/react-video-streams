import { getYoutubeVideos } from '../api/videos_stream';

export const GET_VIDEOS = "GET_VIDEOS";
export const GET_VIDEOS_FULFILLED = "GET_VIDEOS_FULFILLED";

export const getVideos = () => {
    const data = getYoutubeVideos().then(res => { return res }).catch(err => { return err });
    return {
        type: GET_VIDEOS,
        payload: data
    }
}
