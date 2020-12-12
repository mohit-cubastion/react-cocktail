import React from 'react';
import './Category.css';


const NoDataCard = (props) =>{

    return (
        <div className='noimage-container' style={{backgroundColor: props.bgColor }}>
                    <h2 className='noimage-heading'>
                        {props.displayText}
                    </h2>
                </div>
    )
}

export default NoDataCard;