/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Cart = ({selectedAllActors}) => {
    console.log(selectedAllActors);

    return (
        <div>
            <h4>this is course registration</h4>
            {
                selectedAllActors.map((actor) => (
                    <li>h</li>
                ))
            }
        </div>
    );
};

export default Cart;