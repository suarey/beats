// import React from 'react';
import React, { Component } from 'react';
import Header from '../common/Header/Header';



class Home extends Component {

    state = {
        playing: "false"
    }

    playAudio = (event) => {
        let samplePath = '/assets/clap-1.wav';
        let audio = new Audio(samplePath)
         audio.play()

        // return new Promise((resolve, reject) => {
        //     let AudioContext = window.AudioContext || window.webkitAudioContext;
        //     let audioCtx = new AudioContext();
        //     console.log(audioCtx)
        //     let audioElement = document.querySelector('audio');
        //     let track = audioCtx.createMediaElementSource(audioElement);
        //     track.connect(audioCtx.destination);
        //     // check if context is in suspended state (autoplay policy)
        //     if (audioCtx.state === 'suspended') {
        //         audioCtx.resume();
        //     }
        //     if (event.dataset.playing === 'false') {
        //         audioElement.play();
        //         event.dataset.playing = 'true';
        //     } else if (event.dataset.playing === 'true') {
        //         audioElement.pause();
        //         event.dataset.playing = 'false';
        //     }

        //     resolve("Completed")
        // }) 
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
                <Header text={"Welcome to BEATS.909"}/>
                <button name="clap-1" onClick={this.playAudio} role="switch" aria-checked="false">
                    Play/Pause
                </button>
                 {/* <button name="clap-1" onClick={this.handleClick} data-playing="false" role="switch" aria-checked="false">
                    Play/Pause
                </button> */}
                {/* Audio Files */}
               {/* <audio src="/assets/clap-1.wav" name="clap-1" type="audio/wav"></audio> */}
            </div>
        )
    }
};

export default Home;