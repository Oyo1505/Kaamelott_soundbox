import React, { Component } from 'react';
import SoundCard from './SoundCard';

class SoundCards extends Component{

	constructor(props){
		super();

	}

	render(){	
	
		
		let cardsKaamelott;

		 if(this.props.kaamelott){

		 	cardsKaamelott = this.props.kaamelott.map(function(card){
		

		 		return (  <SoundCard kaamelott={card} key={card.character} />);
		 		
		 	})
		 }

		return(
			<div>
				{cardsKaamelott}
					<div className="clear"></div>
			</div>
			);
	}
}

export default SoundCards;