import './home-page.css';
import React from 'react';
import { GameItem } from '../../components/game-item/game-item';
import { GAMES_DATA } from '../../games-data/games-data';

export const HomePage = () => {
    return (
        <div className='home-page'>
            {GAMES_DATA.map((game) => <GameItem key={game.id} game={game} />)}
        </div>
    );
};
