import React, { Component }  from "react";
import { connect } from "react-redux";
import { getPlayers, getTeams } from "../../../actions/playerActions";
import 'bulma/css/bulma.css'
import './styles.css'

class PlayerCard extends Component {
	componentDidMount() {
		this.props.getPlayers(); 
		this.props.getTeams(); 
	}

	render() {
		const players = this.props.players;
		const teams = this.props.teams;

		const cardItems = players.map((player) =>
			<div className="flex-row-item " key={player.id}>
				<div className="card">
					<img className="card-image" src={"http://localhost:3008/" + player.image} alt=""/>
					<div className="card-content">	
						<h1 className="is-size-4 has-text-weight-bold">{player.name}</h1>

						{teams.filter(team => team.id === player.team).map(filteredTeam => (
						 <h2 className="is-size-5 has-text-weight-medium" key={filteredTeam.id}>{filteredTeam.name}</h2>))
						}

						<h3 className="has-text-weight-light">{player.position}</h3>
						<h3 className="has-text-weight-light">College: {player.college}</h3>
					</div>
				</div>
			</div>
		);

		return (
			<div className="flex-row-container">
					{cardItems}
			</div>
		);
	}
};

const mapStateToProps = state => {
  return {
		players: state.reducer.players,
		teams: state.reducer.teams
  };
};
export default connect(mapStateToProps, { getPlayers, getTeams }) (PlayerCard);
