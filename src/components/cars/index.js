import React from 'react';
import useCars from './../../hooks/useCars'
import Car from "../car";

const Cars = () => {

    const { cars, incrementPrice, decrementPrice } = useCars();

    return (
        <div>
            <h1>Cars</h1>
            {Object.keys(cars).map(carID => (
                <Car
                    key={carID}
                    name={cars[carID].name}
                    price={cars[carID].price}
                    incrementPrice={() => incrementPrice(carID)}
                    decrementPrice={() => decrementPrice(carID)}
                />
            ))}

        </div>
    );
};

export default Cars;