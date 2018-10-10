import React, { Component, Fragment } from 'react';

class CardContent extends Component {

	
	constructor(props){
		super(props);
		 this.state = {
            active: false,
        };
		this.play = this.play.bind(this)
		this.soundEnded = this.soundEnded.bind(this)
	}

	replaceString(title){
		
		let newTitle = `${title.substr(0, 27)}...`;
	
		return newTitle;

	}
	play(){
			
			var sound = document.getElementById(`${this.props.data.file}`);
			const currentState = this.state.active;
        	this.setState({ active: !currentState });
			sound.currentTime=0;
		
				sound.play();

			


	}

	soundEnded(){
		var sound = document.getElementById(`${this.props.data.file}`)
		const currentState = this.state.active;
        this.setState({ active: !currentState });
		if (sound !== undefined) {
		    sound.pause();
		  }
	}	

	render(){

			let title = this.props.data.title;
			let playingClass = ['playing'];


			const soundFile = require(`../sounds/kamelott/${this.props.data.file}`);
		
		 return (
		    <Fragment>
		    	
		    		<li className="sound-item"> <button onClick={this.play} onEnded={this.soundEnded} ><audio className={this.state.active ? 'playing' : null} preload="none" id={this.props.data.file}   src={soundFile}></audio><span>{title.lenght <= 27  ? 

		    				title :

		    			this.replaceString(title)

		    			}</span>  <i className={this.state.active ? 'icon icon-pause' :'icon icon-play' }></i> </button></li>
		    	
		    </Fragment>
		  )
	}
 
}

export default CardContent;
