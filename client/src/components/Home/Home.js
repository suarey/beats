// import React from 'react';
import React, { Component } from 'react';
import Header from '../common/Header/Header';



class Home extends Component {

    state = {
        playing: "false"
    }
    // playKick = (event) => {
    //     let samplePathKick = '/assets/kick.wav';
    //     let audio = new Audio(samplePathKick)
    //      audio.play()
    // }
    // playSnare = (event) => {
    //     let samplePathSnare = '/assets/snare.wav';
    //     let audio = new Audio(samplePathSnare)
    //      audio.play()
    // }

    playSample = (event) =>{
        console.log("EVENT", event.target.getAttribute("data-sample"))
        let sample = event.target.getAttribute("data-sample");
        let samplePath = `/assets/${sample}.wav`;
        let audio = new Audio(samplePath)
         audio.play()
    }
    handleClick = async (e) => {

        // let button = e.target;
        // await this.playAudio(button)
        // button.dataset.playing = "false";
        // audioElement.addEventListener('ended', () => {
        //     playButton.dataset.playing = 'false';
        // }, false);
    }

    render() {
        return ( 
            <div>
                <Header text={"PUSH MY BUTTONS!"}/>
                <div className="button-wrapper">
                <button  name="clap-1" data-sample="clap-1" onClick={this.playSample} role="switch" aria-checked="false">
                    CLAP
                </button>

                   <button  name="kick" data-sample="kick" onClick={this.playSample} role="switch" aria-checked="false">
                    KICK
                </button>
                <button  name="snare" data-sample="snare" onClick={this.playSample} role="switch" aria-checked="false">
                    SNARE
                </button>
                <button  name="cowbell" data-sample="cowbell" onClick={this.playSample} role="switch" aria-checked="false">
                    COWBELL
                </button>
                <button  name="cymbal" data-sample="cymbal" onClick={this.playSample} role="switch" aria-checked="false">
                    CYMBAL
                </button>
                <button  name="closed-hihat" data-sample="hihat-close" onClick={this.playSample} role="switch" aria-checked="false">
                    CLOSED HI-HAT
                </button>
                <button  name="kick2" data-sample="kick2" onClick={this.playSample} role="switch" aria-checked="false">
                    KICK2
                </button>
                <button  name="ride" data-sample="ride" onClick={this.playSample} role="switch" aria-checked="false">
                    RIDE
                </button>
                <button  name="open-hi-hat" data-sample="hihat-open-1" onClick={this.playSample} role="switch" aria-checked="false">
                    OPEN HI-HAT
                </button>
                <button name="rim" data-sample="rim" onClick={this.playSample} role="switch" aria-checked="false">
                    RIM
                </button>
                <button name="tom-h" data-sample="tom-h" onClick={this.playSample} role="switch" aria-checked="false">
                    HI-TOM
                </button>
                <button name="tom-l" data-sample="tom-l" onClick={this.playSample} role="switch" aria-checked="false">
                    LOW-TOM
                </button>
                <button name="crash" data-sample="crash" onClick={this.playSample} role="switch" aria-checked="false">
                    CRASH
                </button>
                <button name="snare2" data-sample="SNARE2" onClick={this.playSample} role="switch" aria-checked="false">
                    SNARE2
                </button>
                <button name="clap2" data-sample="clap2" onClick={this.playSample} role="switch" aria-checked="false">
                    CLAP2
                </button>
                <button name="midtom" data-sample="midtom" onClick={this.playSample} role="switch" aria-checked="false">
                    MID-TOM
                </button>
                </div>
            </div>
        )
    }
};

export default Home;