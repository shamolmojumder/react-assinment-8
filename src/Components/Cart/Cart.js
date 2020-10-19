import React from 'react';

const Cart = (props) => {
    console.log(props);

    const cart=props.cart;
    let totaladd=0;
    for (let i = 0; i < cart.length; i++) {
        const amount = cart[i];
        totaladd=totaladd+amount.price;
    }
    return (
        <div>
            <h1>Total Price:{totaladd} </h1>
        </div>
    );
};

export default Cart;