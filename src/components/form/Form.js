import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
function Form () {
    return(
        <div className='form-style'>
            <input type={'text'} placeholder="search accaunt"/>
            <div className='form-icons'>
               <IoSearchSharp/>
            </div>
            
        </div>
    )
}

export default Form;