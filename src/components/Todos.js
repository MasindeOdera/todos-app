import React, { useReducer, useContext, useEffect, useRef, useState } from 'react';
import '../App.css';

function appReducer(state, action, id) {
    switch (action.type) {
        case 'clear': {
            return [];
        }
        case 'reset': {
            return action.payload;
        }
        case 'add': {
            return [
                ...state,
                {
                    id: Date.now(),
                    text: '',
                    completed: false,
                },
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
            console.log(state);
            console.log(action.payload);    
            console.log(Object.getOwnPropertyNames(action.payload));
            // return state.map(item => {
            //     return {
            //         ...item,
            //         text: action.payload,
            //     };
            // });
            return state.map((item) => {
                if(item.id === Object.getOwnPropertyNames(action.payload)) {
                    return {
                        ...item,
                        text: ( item.id in action.payload) ? action.payload : '',
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

function Todos() {
    const [state, dispatch] = useReducer(appReducer, []);

    //This is a custom hook to handle running useEffect once.
    useEffectOnce(() => {
        const raw = localStorage.getItem('data');
        console.log("After getItem",state);
        dispatch({ type: 'reset', payload: JSON.parse(raw) });
    })

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(state));
        console.log("After setItem",state);
    },
    [state]
    );

    return (
        <Context.Provider value={dispatch}>
            <h1>Todos App</h1>
            <button style={{margin: "4px"}} onClick={() => dispatch({ type: 'add' })}>New Todo</button>
            <button style={{margin: "4px"}} onClick={() => dispatch({ type: 'clear' })}>Clear Todos</button>
            <br />
            <br />
            <TodosList items={state} />
        </Context.Provider>
    )
}

function TodosList({ items }) {
    return items.map(item => <TodoItem key={item.id} {...item} />)
}

function TodoItem({ id, completed, text, index }){
    const dispatch = useContext(Context);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
        console.log({id});
        //Last character of text was not saved when I had payload: input, that is why I have it like is right now.
        dispatch({ type: 'text', payload: {[e.target.name]: e.target.value}});
        console.log(id);
    };

    return (
        <div
            style={{
                display: 'block',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: '2px',
                padding: '2px',
            }}
        >
        <input type="checkbox" checked={completed} onChange={() => dispatch({ type: 'completed', payload: id })} />
    
        <input type="text" name={id} index={id} placeholder="Type in Todo" defaultValue={text} onChange={handleInputChange} />
        <button onClick={() => dispatch({ type: 'delete', payload: id })}>Delete</button>
        </div>
        );
}

export default Todos;
