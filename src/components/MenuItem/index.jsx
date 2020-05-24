import React from 'react';
import './styles.scss';


const MenuItem = ({ title, image, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            backgroundImage: `url(${image})`
        }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;