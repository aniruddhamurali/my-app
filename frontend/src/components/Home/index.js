import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import p5 from "p5";

import IntroContainer from '../IntroContainer';
import ExperienceContainer from '../ExperienceContainer';
import ProjectContainer from '../ProjectContainer';
import "./Home.css"

class Home extends Component {
    constructor(props){
		super(props);
		this.state = {};
        this.myRef = React.createRef()
	}
    
    Sketch = (p) => {
        var snowflakes = [];

        let myFont;
        p.preload = () => {
            myFont = p.loadFont('./fonts/Lato-Black.ttf');
        }

        p.setup = () => {
            p.createCanvas(window.innerWidth, window.innerHeight);
            p.fill(240);
            p.noStroke();
            p.textAlign(p.CENTER, p.CENTER);
            p.textSize(64);
            p.textFont(myFont);
            
            //p.textStyle(p.BOLD);
        }
    
        p.draw = () => {
            //p.background('brown');
            p.background(p.color(48, 178, 255));
            let t = p.frameCount / 60; // update time

            // create a random number of snowflakes each frame
            for (let i = 0; i < p.random(5); i++) {
                snowflakes.push(new Snowflake()); // append snowflake object
            }

            // loop through snowflakes with a for..of loop
            for (let flake of snowflakes) {
                flake.update(t); // update snowflake position
                flake.display(); // draw snowflake
            }

            p.text('Aniruddha Murali', window.innerWidth/2, window.innerHeight/2 * 4/5);
        }

        // snowflake class
        function Snowflake() {
            // initialize coordinates
            this.posX = 0;
            this.posY = p.random(-50, 0);
            this.initialAngle = p.random(0, 2 * p.PI);
            this.size = p.random(2, 5);
        
            // radius of snowflake spiral
            // chosen so the snowflakes are uniformly spread out in area
            this.radius = p.sqrt(p.random(p.pow(p.width / 2, 2)));
        
            this.update = function(time) {
                // x position follows a circle
                let w = 0.6; // angular speed
                let angle = w * time / 2 + this.initialAngle;
                this.posX = p.width / 2 + this.radius * p.sin(angle);
            
                // different size snowflakes fall at slightly different y speeds
                this.posY += p.pow(this.size, 0.5);
            
                // delete snowflake if past end of screen
                if (this.posY > p.height) {
                    let index = snowflakes.indexOf(this);
                    snowflakes.splice(index, 1);
                }
            };
        
            this.display = function() {
                p.ellipse(this.posX, this.posY, this.size);
            };
        }

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        }
    }
    
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
    

    render() {
        return (
            <div>
                <div className="animation" ref={this.myRef}></div>
                <IntroContainer></IntroContainer>
                <ExperienceContainer></ExperienceContainer>
                <ProjectContainer></ProjectContainer>
            </div>
        )
    }
}

export default Home;