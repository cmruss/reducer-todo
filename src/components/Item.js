import React from 'react';
import moment from 'moment';

const Item = (props) => {

    return (
        <div className='item'>
            <p style={{ textDecoration: props.item.completed ? 'line-through' : 'none' }}>{props.item.item}</p>
            <p>added {moment(props.item.id).format('dddd')}</p>
            <input type='checkbox' onClick={()=>{props.toggleComplete(props.item.id)}}/>
        </div>
    )
};

export default Item;