import React, { Component, Fragment } from 'react';
import SoundCard from './SoundCard';


class SoundCards extends Component{
	render(){	
	
		let cardsKaamelott;
		 if(this.props.kaamelott){

		 	cardsKaamelott = this.props.kaamelott.map(function(card){
		
		 		return (  <SoundCard  kaamelott={card} key={`${card.id}-2`} />);
		 		
		 	})
		 }

		return(
			<Fragment>
				{cardsKaamelott}
			</Fragment>
			);
	}
}

export default SoundCards;