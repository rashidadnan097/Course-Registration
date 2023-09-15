/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({selectedAllActors}) => {
    console.log(selectedAllActors);

    return (
        <div className='cart-container'>
            <h3 className='remain'>Credit Hour Remaining </h3>
            <hr />
            {
                selectedAllActors.map((actor) => (
                    <li key={actor.id}>{actor.title}</li>
                ))
            }
            <hr />
            <h3 className='total'>Total credit hours: {selectedAllActors.credit}</h3>
        </div>
    );
};

export default Cart;