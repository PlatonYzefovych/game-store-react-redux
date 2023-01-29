import './game-cover.css';
import React from 'react';

export const GameCover = ({ image = "" }) => {
    return (
        <div className='game-cover' style={{ backgroundImage: `url(${image})` }}></div>
    );
};
