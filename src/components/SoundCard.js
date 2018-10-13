import React, { Component, Fragment } from 'react';
import ReactDOM from "react-dom";
import styled from 'styled-components';
import { animated} from 'react-spring';
import { Card, Modal } from '../Elements';
import { Toggle, absolute, Portal } from '../Utilities';
import CardContent from './CardContent';
import Icon from '../Elements/Icon';
import { Col, Row } from 'react-bootstrap';
const sounds = require('../sounds/kamelott/sounds.json');


const AnimCard = Card.withComponent(animated.div);


const CardTest = styled.div`
	width:200px;
	height:300px;
	margin-bottom:30px;
	margin-right: 30px;
	display: inline-block;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;

	&:hover{
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
	&.active{
		width:200px;
		height: auto;
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


class SoundCard extends Component {


	constructor(props){
		super(props);

		this.state = {end:false};

		this.toggle = this.toggle.bind(this);
		

	}

	toggle(){

	
		this.setState({end: !this.state.end});

		
	} 

	componentDidMount() {
		
	}
	render() {
		const { toggle , on } = this.props;
		const isEnd = this.state.end;
		let boxClass = ["box"];

		if(isEnd)
		{
			boxClass.push('active');
		}


		
		return(
				<Col sm={6} md={3}>
						
						<CardTest className={boxClass.join(' ')} id={this.props.kaamelott.character}   >
					
									
							<img className="picture-character" id={`picture-${this.props.kaamelott.character}`} src={this.props.kaamelott.file} />
							<h3 className="title-character">{this.props.kaamelott.character  }</h3>
						
					    <Toggle key={`toggle-card-${this.props.kaamelott.character}`} >
     						
           						 { ({on, toggle }) =>(
								
									 <Fragment>
									
					                <button className='btnn btn-2' onClick={toggle}>Ouvrir</button>
					                <Modal on={on} toggle={toggle} >
					                <img className="picture-character" id={`picture-${this.props.kaamelott.character}`} src={this.props.kaamelott.file} />
									<h3 className="title-character">{this.props.kaamelott.character  }</h3>
					                <ul className="sound-list">

							
										
										{sounds.map(sound =>{
														if(this.props.kaamelott.character === sound.character){
															return(<CardContent    data={sound} file={sound.file} />);
														}
														
											}
												
											)} 		
										
									
									
								
									</ul> 
									</Modal>
					                
					              </Fragment>
								)}	
						</Toggle>		
							</CardTest>

					

			
				</Col>
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
