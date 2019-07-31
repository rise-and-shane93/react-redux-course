import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const Player = props => {
    return (
        <div className="player" onClick={ () => props.playerDetails(props.index)}>
            <div className="player-name">
                <a className="remove-player" onClick={ () => props.removePlayer(props.index)}>✖</a>
                {props.name}
            </div>
            <div className="player-score">
                <Counter 
                    updatePlayerScore={props.updatePlayerScore}
                    score={props.score} 
                    index={props.index}
                />
            </div>
        </div>
    );
}
  
Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    updatePlayerScore: PropTypes.func.isRequired
};

export default Player; 