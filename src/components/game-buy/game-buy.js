import './game-buy.css';
import React from 'react';
import { Button } from '../UI/button/button';

export const GameBuy = ({ game }) => {
    return (
        <div className='game-buy'>
            <Button>
                <span className='game-buy__price'> ${game.price}</span>
            </Button>
        </div>
    );
};
