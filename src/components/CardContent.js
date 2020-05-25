import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CardContent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.play = this.play.bind(this)
        this.soundEnded = this.soundEnded.bind(this)
    }

    replaceString(title) {

        let newTitle = `${title.substr(0, 27)}...`;

        return newTitle;

    }
    
    play() {

        var sound = document.getElementById(`${this.props.data.file}`);
        const currentState = this.state.active;
        sound.currentTime = 0;
        if (!currentState) {
            sound.play();
        } else if (currentState) {
            sound.pause();
        }
        this.setState({ active: !currentState });
    }

    soundEnded() {
        var sound = document.getElementById(`${this.props.data.file}`)
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        if (sound !== undefined) {
            sound.pause();
        }
    }

    render() {
        let title = this.props.data.title;
        const soundFile = require(`../../sounds/kamelott/${this.props.data.file}`);
        return (
            <Fragment>
                    <li key={`sound-${title}`}
                     className="sound-item"> 
                     <button onClick={this.play} onEnded={this.soundEnded} >
                         <audio className={this.state.active ? 'playing' : null} 
                                preload="none" id={this.props.data.file}   
                                src={soundFile}>
                        </audio>
                         <span>{title.lenght <= 27  ? 
		    				title :
		    			this.replaceString(title)
		    			}
                        </span>  
                        <i className={this.state.active ? 'icon icon-pause icon-play-soundbox ' :'icon icon-play icon-play-soundbox ' }></i> 
                        </button>
                        </li>
		    	
		    </Fragment>
        )
    }

}

export default CardContent;

CardContent.propTypes = {
    active: PropTypes.bool,
}