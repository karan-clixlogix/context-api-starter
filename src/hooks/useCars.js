import React from 'react';
import {AppContext } from './../context/CarsContext'

const UseCars = () => {

    const [state, setState] = React.useContext(AppContext);

    console.log("state==>", state);

    function incrementPrice(selectedID)  {
        const cars = Object.assign({}, state.cars);
        cars[selectedID].price = cars[selectedID].price + 1;
        setState((prevState)=> {
            return {...prevState, cars}
        });
    }
    function decrementPrice(selectedID)   {
        const cars = Object.assign({}, state.cars);
        cars[selectedID].price = cars[selectedID].price - 1;
        setState((prevState)=> {
            return {...prevState, cars}
        });
    }
    return {
        incrementPrice,
        decrementPrice,
        cars: state.cars,
        users: state.users,
    }
};

export default UseCars;