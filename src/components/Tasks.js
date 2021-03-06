import React, { useReducer, useEffect, useRef, useContext, useState } from 'react';
import '../App.css';

function appReducer(state =[], action) {
    switch (action.type) {
        case 'clear': {
            return [];
        }
        case 'reset': {
            return action.payload;
        }
        case 'add': {
            return [
                {
                    id: Date.now(),
                    text: '',
                    completed: false,
                },
                ...state || [],
            ];
        }
        case 'delete': {
            return state.filter(item => item.id !== action.payload);
        }
        case 'completed': {
            return state.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            });
        }
        case 'text': {
            return state.map(item => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        text: action.payload.input,
                    };
                }
                return item;
            });
        }
        default: {
            return state;
        }
    }
}

const Context = React.createContext();

function useEffectOnce(cb) {
    const didRun = useRef(false);

    useEffect(() => {
        if(!didRun.current) {
            cb();
            didRun.current = true;
        }
    });
};

function Tasks() {
    const [state, dispatch] = useReducer(appReducer, []);

    //This is a custom hook to handle running useEffect once.
    useEffectOnce(() => {
        const raw = localStorage.getItem('data');
        dispatch({ type: 'reset', payload: JSON.parse(raw) });
    })

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(state));
    },
    [state]
    );

    // count displays the number of items in the list.
    const count = <b style={{cursor: "default"}}>{state && state.length} {state && state.length === 1  ? "task in list." : "tasks in list." }</b>;

    return (
        <Context.Provider value={dispatch}>
            <h1 style={{cursor: "default"}}>Task App</h1>
            <header className="Options">
                <button style={{margin: "4px", cursor: "pointer"}} onClick={() => dispatch({ type: 'add' })}>Create Task</button>
                <button style={{margin: "4px", cursor: "pointer"}} onClick={() => dispatch({ type: 'clear' })}>Delete List</button>
            </header>
            <br />
            { state && state.length >= 1 ? count : null }
            <div className="Container">
                <TasksList items={state} />
            </div>
        </Context.Provider>
    )
}

function TasksList({ items }) {
    return items && items.map(item => <TaskItem key={item.id} {...item} />)
}

function TaskItem({ id, completed, text}){
    const dispatch = useContext(Context);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        //Last character of text was not saved when I had payload: input, that is why I have it like is right now.
        let input = e.target.value;
        setInput(e.target.value);
        dispatch({ type: 'text', payload: {id, input}});
    };

    return (
        <div className="Task">
            <input type="checkbox" checked={completed} onChange={() => dispatch({ type: 'completed', payload: id })} />
            <textarea type="text" autoFocus name={id} index={id} placeholder="Type in task, note, shopping list or shenanigan..." defaultValue={text} onChange={handleInputChange} />
            <i className="fa fa-trash" aria-hidden="true" onClick={() => dispatch({ type: 'delete', payload: id })}></i>
        </div>
        );
}

export default Tasks;
