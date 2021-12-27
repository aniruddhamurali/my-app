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


    /*
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
    }*/

    Sketch = (p) => {
        var network;

        p.setup = () => { 
            //p.createCanvas(640, 360);
            p.createCanvas(window.innerWidth, window.innerHeight);
            network = new Network(p.width/2, p.height/2);
            
            var a = new Neuron(-275, 45);
            var b = new Neuron(-275, -45);
            
            var c = new Neuron(-75, 135);
            var d = new Neuron(-75, 45);
            var e = new Neuron(-75, -45);
            var f = new Neuron(-75, -135);
            
            var g = new Neuron(100, 0);
            var h = new Neuron(275, 0);
            
            network.connect(a, c, p.random(1));
            network.connect(a, d, p.random(1));
            network.connect(a, e, p.random(1));
            network.connect(a, f, p.random(1));
            
            network.connect(b, c, p.random(1));
            network.connect(b, d, p.random(1));
            network.connect(b, e, p.random(1));
            network.connect(b, f, p.random(1));
            
            network.connect(c, g, p.random(1));
            network.connect(d, g, p.random(1));
            network.connect(e, g, p.random(1));
            network.connect(f, g, p.random(1));
            
            network.connect(g, h, p.random(1));
            
            network.addNeuron(a);
            network.addNeuron(b);
            network.addNeuron(c);
            network.addNeuron(d);
            network.addNeuron(e);
            network.addNeuron(f);
            network.addNeuron(g);
            network.addNeuron(h);
        } 

        p.draw = () => { 
            p.background(0);
            network.update();
            network.display();
            
            if (p.frameCount % 30 === 0) {
                network.feedforward(p.random(1), p.random(1));
            }
        }

        function Connection(from, to,w) {
            this.a = from;
            this.b = to;
            this.weight = w;
            this.sending = false;
            this.sender = null;
            this.output = 0;
            
            
            this.feedforward = function(val) {
                this.output = val*this.weight;
                this.sender = this.a.position.copy();
                this.sending = true;
            }
            
            this.update = function() {
                if (this.sending) {
                    this.sender.x = p.lerp(this.sender.x, this.b.position.x, 0.1);
                    this.sender.y = p.lerp(this.sender.y, this.b.position.y, 0.1);
                    var d = p5.Vector.dist(this.sender, this.b.position);
                    if (d < 1) {
                    this.b.feedforward(this.output);
                    this.sending = false;
                    }
                }
            }
            
            this.display = function() {
                p.stroke(48, 178, 255);
                p.strokeWeight(this.weight * 6);
                p.line(this.a.position.x, this.a.position.y, this.b.position.x, this.b.position.y);
                
                if (this.sending) {
                    p.fill(48, 178, 255);
                    p.strokeWeight(1);
                    p.ellipse(this.sender.x, this.sender.y, 16, 16);
                }
            }
        }
          
        function Network(x, y) {
            this.neurons = [];
            this.connections = [];
            this.position = p.createVector(x, y);
            
            this.addNeuron = function(n) {
                this.neurons.push(n);
            }
            
            this.connect = function(a, b, weight) {
                var c = new Connection(a, b, weight);
                a.addConnection(c);
                this.connections.push(c);
            }
            
            this.feedforward = function() {
                for (var i = 0; i < arguments.length; i++) {
                    var n = this.neurons[i];
                    n.feedforward(arguments[i]);
                }
            }
            
            this.update = function() {
                for (var i = 0; i < this.connections.length; i++) {
                    this.connections[i].update();
                }
            }
            
            this.display = function() {
                p.push();
                p.translate(this.position.x, this.position.y);
                for (var i = 0; i < this.neurons.length; i++) {
                    this.neurons[i].display();
                }
              
                for (var j = 0; j < this.connections.length; j++) {
                    this.connections[j].display();
                }
                p.pop();
            }
          }
          
        function Neuron(x, y) {
            this.position = p.createVector(x, y);
            this.connections = [];
            this.sum = 0;
            this.r = 32;
            
            this.addConnection = function(c) {
                this.connections.push(c);
            }
            
            this.feedforward = function(input) {
                this.sum += input;
                if (this.sum > 1) {
                    this.fire();
                    this.sum = 0;
                }
            }
            
            this.fire = function() {
                this.r = 64;
                
                for (var i = 0; i < this.connections.length; i++) {
                    this.connections[i].feedforward(this.sum);
                }
            }
            
            this.display = function() {
                p.stroke(0);
                p.strokeWeight(1);
                var b = p.map(this.sum, 0, 1, 255, 0);
                p.fill(b);
                p.ellipse(this.position.x, this.position.y, this.r, this.r);
                
                this.r = p.lerp(this.r, 32, 0.1);
            }
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