import React, { Component, Fragment } from 'react';
import SoundCards from '../components/Kaamelott/SoundCards';
import imagesCharacter from '../images/images.json';

class SoundBox extends Component {

    constructor() {
        super()
        this.state = {
            kaamelott: [],

        };
    }

    componentDidMount() {

        let arrayCharacter = [];
        imagesCharacter.map(function(image) {
            var link = require(`../images/${image.file}`)
            return arrayCharacter.push({ id: image.id, character: image.character, file: link });
        });
        this.setState({ kaamelott: arrayCharacter });
    }

    render() {
        return (
            <Fragment>
                <h1>Kaamelott SoundBoxes</h1>
                <section className="section-soundboxes">
                    <SoundCards key={this.state.kaamelott.character} kaamelott={this.state.kaamelott} />
                </section>
				 
			</Fragment>
        )

    }

}

export default SoundBox;