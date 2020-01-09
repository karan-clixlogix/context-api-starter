import React, {useState} from 'react';


export const AppContext = React.createContext();

export const AppProvider = (props) => {
    const initialState = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        },
        users: [
            { key: "user001", name: 'Bunny', age: 10 },
            { key: "user002", name: 'Bill', age: 15 },
            { key: "user003", name: 'Bob', age: 20 }
        ]

    };

    const [state, setState] = useState(initialState)
    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};
