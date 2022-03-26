import React from 'react';
import './Sideber.css'


const Sideber = (props) => {
    const {cart} = props

    let names  ;
    let Images  ;
    for(const gun of cart){
        Images = gun.img;
         names =gun.name;
        //  console.log(Images, names );
       }

    return (
        <div className='cart'>
            <h2>Selected Guns</h2>
            <div className="selected-guns">
                <img src={Images}  alt="" />
                <h3>{names}</h3>
            </div>
            <button>Choose One </button>
            <button>Reset</button>
        </div>
    );
};

export default Sideber;