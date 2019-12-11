import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/todoReducer';
import AddItemForm from './AddItemForm';
import Item from './Item';

const ItemList = () => {
    const [itemState, dispatch] = useReducer(reducer, initialState);
    const [newItemText, setNewItemText] = useState('');
    console.log(itemState);

    const handleChange = event => {
        setNewItemText(event.target.value)
    };

    const addItem = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_ITEM", payload: newItemText})
        setNewItemText('');
    };

    const toggleComplete = (itemId) => {
        dispatch({type: "TOGGLE_COMPLETE", payload: itemId});
    }

    const clearComplete = (e) => {
        e.preventDefault();
        dispatch({ type: "CLEAR_COMPLETE" })
    }


    return(
        
        <div className='item-list-container'>
            <AddItemForm 
                handleChange={handleChange} 
                addItem={addItem}
                clearComplete={clearComplete}
            />
            {itemState.map(item => (
                <Item key={item.id} item={item} toggleComplete={toggleComplete} />
            ))}
        </div>
    )
}

export default ItemList;