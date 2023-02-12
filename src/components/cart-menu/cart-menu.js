import './cart-menu.css';
import React from 'react';
import { calcTotalPrice } from '../utils';
import { Button } from '../UI/button/button';
import { CartItem } from '../cart-item';

export const CartMenu = ({ items, onClick }) => {
    return (
        <div className='cart-menu'>
            <div className='cart-menu__games-list'>
                {
                    items.length > 0 ? items.map((game) =>
                        <CartItem
                            key={game.title}
                            title={game.title}
                            price={game.price}
                            id={game.id}
                        />)
                        : 'Your basket is empty'
                }
            </div>
            {
                items.length > 0 ? (
                    <div className='cart-menu__arrage'>
                        <div className='cart-menu__total-price'>
                            <span>Total:</span>
                            <span>{calcTotalPrice(items)}$</span>
                        </div>
                        <Button onClick={onClick}>
                            Buy
                        </Button>
                    </div>
                ) : null
            }
        </div>
    )
};
