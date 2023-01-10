import React, {useEffect, useState} from 'react';
import db from '../firebase/config';
import VideosShow from '../components/videos_style';
function Videos(){

    const [videos, setVideos] = useState([])

    useEffect(() => {
     db.collection('videos').onSnapshot((snapshot) => 
        setVideos(snapshot.docs.map((doc) => doc.data()))
     )
    }, [])

    return(
        <div className='video-page'>
           <div className='video-container'>
              <VideosShow data={videos}/> 
           </div>
        </div>
    )
}

export default Videos;