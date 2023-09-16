/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({selectedAllActors, totalCredit, totalRemaining}) => {
    console.log(selectedAllActors);

    return (
        <div className='cart-container'>
            <h3 className='remain'>Credit Hour Remaining {totalRemaining} hr</h3>
            <hr />
            <h2>Course Name</h2>
            {
                selectedAllActors.map((actor) => (
                    <li className='list-decimal' key={actor.id}>{actor.title}</li>
                   
                ))
            }
            <hr />
            <h3 className='total'>Total credit hours: {totalCredit}</h3>
        </div>
    );
};

export default Cart;