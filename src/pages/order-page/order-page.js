import './order-page.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../../components/utils';
import { OrderItem } from '../../components/order-item/order-item';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart);

    if (items.length < 1) {
        return <h1>Your basket is empty</h1>
    }

    return (
        <div className='order-page'>
            <div className='order-page__left'>
                {items.map(game => <OrderItem game={game} />)}
            </div>
            <div className='order-page__right'>
                <div className='order-page__total_price'>
                    <span>
                        {items.length} items on total price: {calcTotalPrice(items)} $
                    </span>
                </div>
            </div>
        </div>
    )
}
