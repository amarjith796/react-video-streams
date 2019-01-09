import axios from 'axios';

export const getYoutubeVideos = () => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: 'https://www.googleapis.com/youtube/v3/videos',
            params: {
                'key': 'AIzaSyAxIa4-yv_moGZ1f4sgCqx5_57-9L3scqA',
                'chart': 'mostPopular',
                // 'myRating': 'like',
                'regionCode': 'IN',
                'part': 'snippet,contentDetails,statistics',
                'videoCategoryId': ''
            }
        })
            .then(res => { resolve(res.data) })
            .catch(err => { reject(err) })
    })
}