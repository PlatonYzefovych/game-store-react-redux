import './game-item.css';
import React from 'react';
import { GameBuy } from '../game-buy/game-buy';
import { GameGenre } from '../game-genre/game-genre';
import { GameCover } from '../game-cover/game-cover';

export const GameItem = ({ game }) => {
    return (
        <div className='game-item'>
            <GameCover image={game.image} />
            <div className='game-item__details'>
                <span className='game-item__title'>{game.title}</span>
                <div className='game-item__genre'>
                    {
                        game.genres.map((genre) => <GameGenre key={genre} genre={genre} />)
                    }
                </div>
                <div className='game-item__buy'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    );
};
