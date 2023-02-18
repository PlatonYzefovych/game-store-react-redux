import './cart-block.css';
import React, { useCallback, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu/cart-menu';
import { calcTotalPrice } from '../utils';
import { ItemsInCart } from '../items-in-cart/items-in-cart';
import { useHistory } from 'react-router-dom';

export const CartBlock = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const history = useHistory();

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        history.push('/order')
    }, [history])

    return (
        <div>
            <ItemsInCart quantity={items.length} />
            <AiOutlineShoppingCart
                size={25}
                className='cart-block__icon'
                onClick={() => isCartMenuVisible === true ? setIsCartMenuVisible(false) : setIsCartMenuVisible(true)}
            />

            {totalPrice > 0 ? <span className='cart-block__total-price'> $ {totalPrice} </span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
        </div>
    );
};
