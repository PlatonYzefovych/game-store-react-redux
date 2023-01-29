import './cart-block.css';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const CartBlock = () => {
    return (
        <div>
            <AiOutlineShoppingCart size={25} className='cart-block__icon' />
            <span className='cart-block__total-price'> $ 123 </span>
        </div>
    );
};
