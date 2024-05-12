import React from 'react';
import './BackgroundImageComponent.css'
import backgroundImage from '@/assets/BackgroundImage/Background.png'

function BackgroundImage() {
    return (
        <div className='BackgroundImage'>
            <img src={backgroundImage} alt='backgroundImage' />
        </div>
    );
}

export default BackgroundImage