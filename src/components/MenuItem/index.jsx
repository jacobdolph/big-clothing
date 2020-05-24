import React from 'react';
import './styles.scss';


const MenuItem = ({ title, image, size }) => (
    <div style={{
        backgroundImage: `url(${image})`
    }} className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;