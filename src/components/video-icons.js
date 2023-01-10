import React from 'react';
import { IoHeart} from "react-icons/io5";
import { MdMessage, MdShare } from "react-icons/md";
function VideosIcons({likes,message,shares}){
    return(
        <div className='video-icons-style'>
          <ul>
            <li>
                <IoHeart size={`1.5rem`} className="icons"/>
                <p>{likes}</p>
            </li>
            <li>
                <MdMessage size={`1.5rem`} className="icons"/>
                <p>{message}</p>
            </li>
            <li>
                <MdShare size={`1.5rem`} className="icons"/>
                <p>{shares}</p>
            </li>
          </ul>
        </div>
    )
}

export default VideosIcons;