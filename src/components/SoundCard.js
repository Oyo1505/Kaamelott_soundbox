import React, { Component, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
import CardContent from './CardContent';
import  sounds  from '../../sounds/kamelott/sounds.json'


const CardTest = styled.div`
	width: 15%;
	height: 350px;
	margin-bottom:30px;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	&:hover{
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
	&.active{
	}
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
	
		const isEnd = this.state.end;
		let boxClass = ["box"];

		if(isEnd)
		{
			boxClass.push('active');
		}

	return(
			<CardTest className={`${boxClass.join(' ')} soundbox-character`} id={this.props.kaamelott.character}   >
				<img className="picture-character" id={`picture-${this.props.kaamelott.character}`} src={this.props.kaamelott.file} alt={`picture-${this.props.kaamelott.character}`}/>
				<h4 className="title-character">{this.props.kaamelott.character  }</h4>
					<Fragment>
					 <button className='btnn btn-2' onClick={this.toggle}>Ouvrir</button>
					 <Modal  show={this.state.end} onHide={this.handleClose}
					         size="lg"
							 aria-labelledby="contained-modal-title-vcenter"
							centered>
					        <Modal.Header closeButton>
								 <Modal.Title>
									<img className="picture-character-modal" src={this.props.kaamelott.file} id={`picture-card-content-${this.props.kaamelott.character}`} alt={`picture-${this.props.kaamelott.character}`} />
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
				 </Fragment>
			</CardTest>

		)
	}
}
export default SoundCard;
