import './game-genre.css';
import React from 'react';

export const GameGenre = ({genre}) => {
    return (
        <div className='game-genre'>
            {genre}
        </div>
    );
};
