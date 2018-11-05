// import React from 'react';
import React, { Component } from 'react';
import Header from '../common/Header/Header';
import httpClient from '../../utilities/httpClient';



class Home extends Component {

    state = {
        playing: "false",
        recording: false,
        currentRecording: []
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
        let { recording } = this.state;
        console.log("EVENT", event.target.getAttribute("data-sample"))
        let sample = event.target.getAttribute("data-sample");
        // If recording set to true, push sample into array
        if(recording) {
           
             this.setState((state)=>{
             return  { currentRecording: [...state.currentRecording, sample] }
            })
        }

        // Once "STOP" is clicked 1. sends currentRecording to database, 2. Set recording false
        let samplePath = `/assets/${sample}.wav`;
        let audio = new Audio(samplePath)
         audio.play()
    }

    record = () => {
        this.setState({ recording: true })
    };

    stopRecord = async () => {
        let {currentRecording} = this.state; 
        // Uses httpClient to post a recording to (/api/sequences)
        let res = await httpClient.post("api/sequences", {beats: currentRecording})
        this.setState({ recording: false})
    }


    render() {
        return ( 
            <div>
            
                {/* Recording? {this.state.recording ? "yes" : "no"} */}
                <Header text={"MAKE SOME 909 BEATS!"}/>
                <button onClick={this.record} className="btn-little">RECORD</button>
                <button onClick={this.stopRecord} className="btn-little">STOP</button>
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