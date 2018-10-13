import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';
import SoundCards from '../components/SoundCards';
import characters from '../sounds/kamelott/sounds.json';
import imagesCharacter from '../images/images.json';

class SoundBox extends Component{

	constructor(){
		super()

		this.state = {
			kaamelott:[],
			
			};

	}

	componentWillMount() {
		
		let arrayCharacter = [];
		imagesCharacter.map(function(image){
			var link = require(`../images/${image.file}`)
			arrayCharacter.push({id:image.id, character:image.character, file : link});
			
		});
	
		this.setState({kaamelott:arrayCharacter});
		
		

		
	}

	componentDidMount(){
		
	}

	render(){
			return (
				<Grid>
					<Row className="show-grid">
				    		
				    		<SoundCards key={this.state.kaamelott.character} kaamelott={this.state.kaamelott} />
				    		
				   </Row>
			    </Grid>
			  )

	}
  
}

export default SoundBox;