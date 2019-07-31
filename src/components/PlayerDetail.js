import React, { PropTypes } from 'react';

const PlayerDetail = ({ players, selectedPlayer } = this.props) => {
  if(selectedPlayer > -1){
    return (
      <div>
        <h3>{ players[selectedPlayer].name }</h3>
        <ul>
          <li>
            <span>Score: { players[selectedPlayer].score }</span> 
          </li>
          <li>
            <span>Created: { players[selectedPlayer].created }</span> 
          </li>
          <li>
            <span>Updated: {players[selectedPlayer].updated }</span>
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};

PlayerDetail.propTypes = {
  // name: PropTypes.string.isRequired,
  // score: PropTypes.number.isRequired,
  // created: PropTypes.string.isRequired,
  // updated: PropTypes.string.isRequired,
  selectedPlayer: PropTypes.number.isRequired,
};

export default PlayerDetail;
