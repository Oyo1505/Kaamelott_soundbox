import React from 'react';
import SoundCard from './SoundCard';

function SoundCards (props){
	let cardsKaamelott;
	if(props.kaamelott){
	cardsKaamelott = props.kaamelott.map(function(card){
			return (  <SoundCard  kaamelott={card} key={`${card.id}-2`} />);
		})
	}
	return(<>{cardsKaamelott}</>);
}
export default SoundCards;