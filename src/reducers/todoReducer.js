import { useLocalStorage } from '../hooks/useLocalStorage';

export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    due: (3892987589 + 86400000)
    }
];
    

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now(),
                due: (Date.now() + 86400000)

            }
            return [...state, newItem];
        case "TOGGLE_COMPLETE":
            return state.map((item) => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return (item)
            });
        case "CLEAR_COMPLETE":
            return state.filter(item => {
                return !item.completed;
            })
        default:
                return state;
    };
};