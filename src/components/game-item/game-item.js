import './game-item.css';
import React from 'react';
import { GameBuy } from '../game-buy/game-buy';
import { GameGenre } from '../game-genre/game-genre';
import { GameCover } from '../game-cover/game-cover';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentGame } from '../../redux/games/reducer';

export const GameItem = ({ game }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCurrentGame(game));
        history.push(`/app/${game.title}`)
    };

    return (
        <div className='game-item' onClick={handleClick}>
            <GameCover image={game.image} />
            <div className='game-item__details'>
                <span className='game-item__title'>{game.title}</span>
                <div className='game-item__genre'>
                    {
                        game.genres.map((genre) => <GameGenre key={genre} genre={genre} game={game} />)
                    }
                </div>
                <div className='game-item__buy'>
                    <GameBuy game={game} />
                </div>
            </div>
        </div>
    );
};
