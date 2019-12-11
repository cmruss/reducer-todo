import React from 'react';

const AddItemForm = props => {

    return(
        <form onSubmit={props.addItem}>
            <input
                type='text'
                name='addItemField'
                placeholder='add task..'
                onChange={props.handleChange}
            />
            <button value='submit'>add task</button>
            <button onClick={props.clearComplete}>clear completed</button>
        </form>
    )
}

export default AddItemForm;