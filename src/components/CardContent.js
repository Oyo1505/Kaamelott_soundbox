import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CardContent (props){
    
    const [active, setActive] = useState(false);

  function replaceString(title) {
        let newTitle = `${title.substr(0, 27)}...`;
        return newTitle;
    }
    
   function play() {

        var sound = document.getElementById(`${props.data.file}`);
        const currentState = active;
        sound.currentTime = 0;
        if (!currentState) {
            sound.play();
        } else if (currentState) {
            sound.pause();
        }
       setActive(!active)
    }

    function soundEnded() {
        var sound = document.getElementById(`${props.data.file}`)
        const currentState = active;
        setActive(!active)
        if (sound !== undefined) {
            sound.pause();
        }
    }
        let title = props.data.title;
        const soundFile = require(`../../sounds/kamelott/${props.data.file}`);
        return (
            <>
            <li key={`sound-${title}`}
            className="sound-item"> 
                <button onClick={play} onEnded={soundEnded} >
                 <audio className={active ? 'playing' : null} preload="none" id={props.data.file}   src={soundFile}></audio>
                <span>{title.lenght <= 27  ? title : replaceString(title)}</span>  
                <i className={active ? 'icon icon-pause icon-play-soundbox ' :'icon icon-play icon-play-soundbox ' }></i> 
                </button>
            </li>
		    </>
        );
}

export default CardContent;

CardContent.propTypes = {
    active: PropTypes.bool,
}