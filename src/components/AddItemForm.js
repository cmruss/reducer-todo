import React from 'react';

const AddItemForm = props => {

    return(
        <form onSubmit={props.addItem}>
            <input
                type='text'
                className='add-item'
                name='addItemField'
                placeholder='add task..'
                onChange={props.handleChange}
            />
            <button className='add-button' value='submit'>+</button>
            <button className='clear-button' onClick={props.clearComplete}>-</button>
        </form>
    )
}

export default AddItemForm;