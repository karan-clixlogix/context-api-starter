import React from 'react';
import UseCars from "../../hooks/useCars";

const Users = () => {
    const { users, cars} = UseCars();
    return (
        <div>
            <h1>Users</h1>
            {
                (users).map((item) => {
                    return (
                        <div key={item.key}>
                            <span>Name: {item.name}</span>&nbsp;
                            <span>Age: {item.age}</span>
                        </div>
                    )
                })
            }
            <div>
                {
                    Object.keys(cars).map(item => {
                        return (
                            <div key={item}>
                                {/*<span>key: {item}</span>*/}
                                <span>Name: {item}</span> &nbsp;
                                <span>name: {cars[item].name}</span> &nbsp;
                                <span>price: {cars[item].price}</span> &nbsp;
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Users;