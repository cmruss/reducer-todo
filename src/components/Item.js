import React from 'react';
import moment from 'moment';

const Item = (props) => {

    return (
        <div className='item'>
            <div className='first-line-container'>
                <span style={{ color:'firebrick', textDecoration: props.item.completed ? 'line-through' : 'none' }}>
                    <p style={{color:'black'}}>{props.item.item}</p>
                </span>

                <label className='checkbox-container'>
                    <input type='checkbox' onClick={()=>{props.toggleComplete(props.item.id)}}/>
                    <span className='checkmark'></span>
                </label>
            </div>

            <p style={{ display: props.item.completed ? 'block' : 'none' }}>completed {moment().format('dddd')}</p>
            <p className='overdue' style={{ display: props.item.due < Date.now() && props.item.completed === false ? 'block' : 'none' }}>overdue </p>
        </div>
    )
};

export default Item;