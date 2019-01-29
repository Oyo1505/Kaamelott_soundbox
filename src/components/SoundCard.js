import React, { Component, Fragment } from 'react';
import { Col,Button } from 'react-bootstrap';
import  Modal from 'react-bootstrap/lib/Modal';
import styled from 'styled-components';
import {  animated } from 'react-spring';
import { Card} from '../Elements';
import { Toggle, absolute } from '../Utilities';
import CardContent from './CardContent';
//import Icon from '../Elements/Icon';

const sounds = require('../sounds/kamelott/sounds.json');
let rand = () => Math.floor(Math.random() * 20) - 10;

//const AnimCard = Card.withComponent(animated.div);
const modalStyle = function() {
  // we use some psuedo random coords so nested modals
  // don't sit right on top of each other.
  let top = 50 + rand();
  let left = 50 + rand();

  return {
    position: 'fixed',
    width: 400,
    zIndex: 1040,
    top: 25 +'%',
    left: 25+'%',
    border: '1px solid #e5e5e5',
    backgroundColor: 'white',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: 20
  };
};

const CardTest = styled.div`
	width: 100%;
	height: 350px;
	margin-bottom:30px;
	margin-right: 30px;
	display: inline-block;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;

	&:hover{
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
	&.active{
		
	}
`;
const CardContainer = styled(animated.div)`
	position: relative;
	width:200px;
	height:300px;
	max-width: 35px;
	margin: 0 auto;
	border-radius:5px;
`;

const backdropStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#000',
  opacity: 0.5
};
class SoundCard extends Component {


	constructor(props){
		super(props);

		this.state = {end:false};
		this.toggle = this.toggle.bind(this);
		this.handleClose = this.handleClose.bind(this);

	}

	 handleClose() {
    	this.setState({ end: false });
  	}
	toggle(){

		this.setState({end: !this.state.end});
	} 

	  renderBackdrop(props) {
	    return <div {...props} style={backdropStyle} />;
	  }
	render() {
		const { toggle , on } = this.props;
		const isEnd = this.state.end;
		let boxClass = ["box"];

		if(isEnd)
		{
			boxClass.push('active');
		}


		//console.log(this.props.kaamelott)
		 			
		return(
			
						
						<CardTest className={boxClass.join(' ')} id={this.props.kaamelott.character}   >
					
									
							<img className="picture-character" id={`picture-${this.props.kaamelott.character}`} src={this.props.kaamelott.file} />
							<h4 className="title-character">{this.props.kaamelott.character  }</h4>
						
					   		
								
									 
									<>
					                <button className='btnn btn-2' onClick={this.toggle}>Ouvrir</button>
					                
					                <Modal  show={this.state.end} onHide={this.handleClose}
					                size="lg"
					              	
							        aria-labelledby="contained-modal-title-vcenter"
							        centered>
							    
					                          <Modal.Header closeButton>
					                          
									            <Modal.Title> 
									            <img className="picture-character-modal" src={this.props.kaamelott.file} id={`picture-${this.props.kaamelott.character}`}  />
									           <h3 className="title-character-modal">{this.props.kaamelott.character  }</h3></Modal.Title>
									          </Modal.Header>
									          <Modal.Body>
					               
					               				 <ul className="sound-list">
													{sounds.map(sound =>{
																	if(this.props.kaamelott.character === sound.character){
																		return(<CardContent  key={`card-content-${this.props.kaamelott.character}-${sound.title}`}  data={sound} file={sound.file} />);
																	}			
														}	
											)} 				
								
									</ul> 
									</Modal.Body>
									
									</Modal>
					                </>
					             
									
									
						</CardTest>

					

			
		
			)
	}
}

const CloseButton = styled.button`
	${absolute({
		y :'top',
		x : 'right'
	})};
	border:none;
	background:transparent;
	padding: 10px;
`;

export default SoundCard;
