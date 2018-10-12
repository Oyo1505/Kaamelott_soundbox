import React, { Component, Fragment } from 'react';
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
			<Fragment>
				{cardsKaamelott}
					<div className="clear"></div>
			</Fragment>
			);
	}
}

export default SoundCards;