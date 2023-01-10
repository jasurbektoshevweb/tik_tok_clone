import React from 'react';
import { MdMusicNote } from "react-icons/md";
function Videosfoot({description,page_name,music}){
    return(
        <div className='video-footer-style'>
          <ul>
             <li>
                <h2>@{page_name}</h2>
             </li>
             <li>
                <span>{description}</span>
             </li>
             <li className='thirtLi'>
                <MdMusicNote size={`1.25rem`}/>
                <p>{music}</p>
             </li>
          </ul>
        </div>
    )
}

export default Videosfoot;