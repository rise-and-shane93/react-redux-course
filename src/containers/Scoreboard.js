import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/player';
import Header from '../components/Header';
import Player from '../components/Player';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetail from '../components/PlayerDetail';

class Scoreboard extends Component {
  static PropTypes = {
    players: PropTypes.array.isRequired,
    selectedPlayer: PropTypes.number.isRequired
  };

  render() {
    const { dispatch, players, selectedPlayer } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);
    const playerDetails = bindActionCreators(PlayerActionCreators.playerDetails, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        playerDetails={playerDetails}
      />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        
        <div className="player-detail">
          <PlayerDetail 
            selectedPlayer={selectedPlayer}
            players={players}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayer: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(Scoreboard);
