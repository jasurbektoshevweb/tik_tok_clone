import React from 'react';
import iconsImg from './tiktok.png'
import Form from '../components/form/Form';
import Button from '../components/Button';
function Headers() { 
    return(
        <div className='headers'>
            <div className='head-container'>
                <img src={iconsImg} className="img-header"/>
                <Form/>
                <div className='btn-box'>
                    <a href='#'>Upload</a>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Headers;