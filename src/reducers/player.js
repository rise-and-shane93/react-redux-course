import * as PlayerActionTypes from '../actiontypes/player';

const initialState = {
    players: [{
		name: 'Jim Hoskins',
	  score: 31,
		created: '6:10:00 AM',
		updated: '7:45:30 AM'
	},
	{
		name: 'Andrew Chalkley',
		score: 20,
		created: '12:58:00 PM',
		updated: '10:23:34 PM'
	},
	{
		name: 'Alena Holligan',
		score: 50,
		created: '5:20:10 PM',
		updated: '11:59:00PM'
	}
	],
	selectedPlayerIndex: -1
}

export default function Player(state=initialState, action) {
    switch(action.type){
        case PlayerActionTypes.ADD_PLAYER: {
            const addPlayerList = [...state.players,   {
            name: action.name,
            score: 0
        }];
        return {
            ...state,
            players: addPlayerList
        };
        }

        case PlayerActionTypes.REMOVE_PLAYER: {
              const removePlayerList = [
                  ...state.players.slice(0, action.index),
                  ...state.players.slice(action.index + 1)
              ];
        return {
                  ...state,
                  players: removePlayerList
              };
          }
  
        case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
            const updatePlayerList = state.players.map((player, index) => {
            if(index === action.index){
            return {
              ...player,
               score: player.score + action.score
             };
          }
          return player;
        });
              return {
                  ...state,
                  players: updatePlayerList
              };
        }
      default:
        return state;
    }
  }