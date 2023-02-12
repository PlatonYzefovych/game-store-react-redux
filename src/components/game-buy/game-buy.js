import './game-buy.css';
import React from 'react';
import { Button } from '../UI/button/button';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { useDispatch, useSelector } from 'react-redux';

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = items.some(item => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();
        isItemInCart ? dispatch(deleteItemFromCart(game.id)) : dispatch(setItemInCart(game))
    };

    return (
        <div className='game-buy'>
            <Button onClick={handleClick}>
                <span className='game-buy__price'> ${game.price}</span>
                {isItemInCart ? 'Delete' : 'Add'}
            </Button>
        </div>
    );
};
