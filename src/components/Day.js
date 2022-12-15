import React from 'react';

export const Day = (props) => {
    return(
        <div className='day' key={props.id}>
            <h1>{props.name}</h1>
            <p>{props.meal}</p>
            <p><i>{props.type}</i></p>
        </div>
    );
}