import React, {  useEffect, useState } from 'react';
import SoundCards from '../components/Kaamelott/SoundCards';
import imagesCharacter from '../images/images.json';

function SoundBox () {
    const [kaamelott, setKaamelott] = useState('');

    useEffect(()=>{
        let arrayCharacter = [];
        imagesCharacter.map(function(image) {
            var link = require(`../images/${image.file}`)
            return arrayCharacter.push({ id: image.id, character: image.character, file: link });
        });
        setKaamelott(arrayCharacter);
    }, [] )
        return (
            <>
                <h1 style={{textAlign:"center"}}>Kaamelott SoundBox</h1>
                <section className="section-soundbox">
                    <SoundCards key={kaamelott.character} kaamelott={kaamelott} />
                </section>
			</>
        );
}

export default SoundBox;