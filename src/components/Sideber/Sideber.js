import React from 'react';
import "./Sideber.css"
const Sideber = ({gun}) => {
    console.log(gun);
    return (
        <div className='select-item'>
            <h1>Selected Guns</h1>
<h2>{gun.length}</h2>
        </div>
    );
};

export default Sideber;