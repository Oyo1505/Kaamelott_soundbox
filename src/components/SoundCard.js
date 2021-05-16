import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import styled from 'styled-components';
import CardContent from './CardContent';
import  sounds  from '../../sounds/kamelott/sounds.json'


const Card = styled.div`
	height: 350px;
	text-align: center;
	width: 100%;
	position: relative;
	margin-bottom:30px;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	&:hover{
		box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
	.picture-character{
		object-fit: cover;
		width: 75%;
		height: 60%;
		border-radius: 30px/10px;
		z-index: 2;
	}
`;


function SoundCard (props) {
	const [end, setEnd] = useState(false)
	const [open, setOpen] = useState(false);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	const isEnd = end;
	let boxClass = ["box"];
	if(isEnd){boxClass.push('active');}
	return(
		<>
			<Card className={`${boxClass.join(' ')}`} id={props.kaamelott.character}   >
				<img className="picture-character" id={`picture-${props.kaamelott.character}`} src={props.kaamelott.file} alt={`${props.kaamelott.character}`}/>
				<h4 className="title-character">{props.kaamelott.character  }</h4>
					
					 <button className='btnn' onClick={onOpenModal}>Ouvrir</button>
			</Card>		 
					 <Modal open={open} onClose={onCloseModal} center>
						 <div className="modal-body">
					        <div className="modal-header">
								 <div>
									<img className="picture-character-modal" src={props.kaamelott.file} id={`picture-card-content-${props.kaamelott.character}`} alt={`${props.kaamelott.character}`} />
									 <h3 className="title-character-modal">{props.kaamelott.character  }</h3></div>
							</div>
						<div >
					        <ul className="modal-soundbox-content">
								{sounds.map(sound =>{
									if(props.kaamelott.character === sound.character){
										return (<CardContent  key={`card-content-${props.kaamelott.character}-${sound.title}`}  data={sound} file={sound.file} />);
									}
									}
								)}
							</ul>
						</div>
						</div>
					</Modal>
				 </>
		)
}
export default SoundCard;
