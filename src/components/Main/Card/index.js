import React, { Component }  from "react";
import { connect } from "react-redux";
import { getPlayers } from "../../../actions/playerActions";

class Card extends Component {
	componentDidMount() {
		this.props.getPlayers(); 
	}

	render() {
		console.log(this.props.players)

		const players = this.props.players;
		return (
			<div>
				<ul>
					{players.map(player => (
						<li key={player.id}>{player.name}</li>
					))}
				</ul>
			</div>
		);
	}
};


const mapStateToProps = state => {
  return {
		players: state.reducer.players
  };
};
export default connect(mapStateToProps, { getPlayers }) (Card);
