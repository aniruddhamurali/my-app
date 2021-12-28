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
        var div;

        p.setup = () => { 
            var w = window.innerWidth;
            var h = window.innerHeight;
            p.createCanvas(window.innerWidth, window.innerHeight-300);

            /*
            div = p.createDiv("CREATING CREATIVE, INNOVATIVE TECHNOLOGIES");
            div.id('canvastext');
            //div.style('font-size', '48px');
            //div.attribute('align', 'center');
            //div.style('margin', '0 auto');
            //p.rectMode(p.CENTER, p.CENTER);
            //div.position(p.width/2, p.height/2 - 300);
            div.style('left', '25%');
            div.style('top', '15%');
            div.style('position', 'absolute');
            */


            network = new Network(w/2, h/2 + 50);

            var x1 = -w/8*2;
            var x2 = -w/8;
            var x3 = 0;
            var x4 = w/8;
            var x5 = w/8*2;
            var y1 = -400;
            var y2 = y1 + 100;
            var y3 = y2 + 100;
            var y4 = y3 + 100;
            var y5 = y4 + 100;
            
            var a = new Neuron(x1, y4);
            var b = new Neuron(x1, y3);
            var c = new Neuron(x1, y2)
            
            var d = new Neuron(x2, y5);
            var e = new Neuron(x2, y4);
            var f = new Neuron(x2, y3);
            var g = new Neuron(x2, y2);
            var h = new Neuron(x2, y1);

            var i = new Neuron(x3, y5);
            var j = new Neuron(x3, y4);
            var k = new Neuron(x3, y3);
            var l = new Neuron(x3, y2);
            var m = new Neuron(x3, y1);
            
            var n = new Neuron(x4, y3);
            var o = new Neuron(x5, y3);
            
            network.connect(a, d, p.random(1));
            network.connect(a, e, p.random(1));
            network.connect(a, f, p.random(1));
            network.connect(a, g, p.random(1));
            network.connect(a, h, p.random(1));
            
            network.connect(b, d, p.random(1));
            network.connect(b, e, p.random(1));
            network.connect(b, f, p.random(1));
            network.connect(b, g, p.random(1));
            network.connect(b, h, p.random(1));

            network.connect(c, d, p.random(1));
            network.connect(c, e, p.random(1));
            network.connect(c, f, p.random(1));
            network.connect(c, g, p.random(1));
            network.connect(c, h, p.random(1));
            
            network.connect(d, i, p.random(1));
            network.connect(d, j, p.random(1));
            network.connect(d, k, p.random(1));
            network.connect(d, l, p.random(1));
            network.connect(d, m, p.random(1));

            network.connect(e, i, p.random(1));
            network.connect(e, j, p.random(1));
            network.connect(e, k, p.random(1));
            network.connect(e, l, p.random(1));
            network.connect(e, m, p.random(1));

            network.connect(f, i, p.random(1));
            network.connect(f, j, p.random(1));
            network.connect(f, k, p.random(1));
            network.connect(f, l, p.random(1));
            network.connect(f, m, p.random(1));

            network.connect(g, i, p.random(1));
            network.connect(g, j, p.random(1));
            network.connect(g, k, p.random(1));
            network.connect(g, l, p.random(1));
            network.connect(g, m, p.random(1));

            network.connect(h, i, p.random(1));
            network.connect(h, j, p.random(1));
            network.connect(h, k, p.random(1));
            network.connect(h, l, p.random(1));
            network.connect(h, m, p.random(1));
            
            network.connect(i, n, p.random(1));
            network.connect(j, n, p.random(1));
            network.connect(k, n, p.random(1));
            network.connect(l, n, p.random(1));
            network.connect(m, n, p.random(1));

            network.connect(n, o, p.random(1));
            
            network.addNeuron(a);
            network.addNeuron(b);
            network.addNeuron(c);
            network.addNeuron(d);
            network.addNeuron(e);
            network.addNeuron(f);
            network.addNeuron(g);
            network.addNeuron(h);
            network.addNeuron(i);
            network.addNeuron(j);
            network.addNeuron(k);
            network.addNeuron(l);
            network.addNeuron(m);
            network.addNeuron(n);
            network.addNeuron(o);
        }
        
        function recreateNetwork() {
            var w = window.innerWidth;
            var h = window.innerHeight;

            var x1 = -w/8*2;
            var x2 = -w/8;
            var x3 = 0;
            var x4 = w/8;
            var x5 = w/8*2;
            /*
            var y1 = -225;
            var y2 = -135;
            var y3 = -45;
            var y4 = 45;
            var y5 = 135;
            */
            var y1 = -400;
            var y2 = y1 + 100;
            var y3 = y2 + 100;
            var y4 = y3 + 100;
            var y5 = y4 + 100;

            network = new Network(w/2, h/2 + 50);
            
            var a = new Neuron(x1, y4);
            var b = new Neuron(x1, y3);
            var c = new Neuron(x1, y2)
            
            var d = new Neuron(x2, y5);
            var e = new Neuron(x2, y4);
            var f = new Neuron(x2, y3);
            var g = new Neuron(x2, y2);
            var h = new Neuron(x2, y1);

            var i = new Neuron(x3, y5);
            var j = new Neuron(x3, y4);
            var k = new Neuron(x3, y3);
            var l = new Neuron(x3, y2);
            var m = new Neuron(x3, y1);
            
            var n = new Neuron(x4, y3);
            var o = new Neuron(x5, y3);
            
            network.connect(a, d, p.random(1));
            network.connect(a, e, p.random(1));
            network.connect(a, f, p.random(1));
            network.connect(a, g, p.random(1));
            network.connect(a, h, p.random(1));
            
            network.connect(b, d, p.random(1));
            network.connect(b, e, p.random(1));
            network.connect(b, f, p.random(1));
            network.connect(b, g, p.random(1));
            network.connect(b, h, p.random(1));

            network.connect(c, d, p.random(1));
            network.connect(c, e, p.random(1));
            network.connect(c, f, p.random(1));
            network.connect(c, g, p.random(1));
            network.connect(c, h, p.random(1));
            
            network.connect(d, i, p.random(1));
            network.connect(d, j, p.random(1));
            network.connect(d, k, p.random(1));
            network.connect(d, l, p.random(1));
            network.connect(d, m, p.random(1));

            network.connect(e, i, p.random(1));
            network.connect(e, j, p.random(1));
            network.connect(e, k, p.random(1));
            network.connect(e, l, p.random(1));
            network.connect(e, m, p.random(1));

            network.connect(f, i, p.random(1));
            network.connect(f, j, p.random(1));
            network.connect(f, k, p.random(1));
            network.connect(f, l, p.random(1));
            network.connect(f, m, p.random(1));

            network.connect(g, i, p.random(1));
            network.connect(g, j, p.random(1));
            network.connect(g, k, p.random(1));
            network.connect(g, l, p.random(1));
            network.connect(g, m, p.random(1));

            network.connect(h, i, p.random(1));
            network.connect(h, j, p.random(1));
            network.connect(h, k, p.random(1));
            network.connect(h, l, p.random(1));
            network.connect(h, m, p.random(1));
            
            network.connect(i, n, p.random(1));
            network.connect(j, n, p.random(1));
            network.connect(k, n, p.random(1));
            network.connect(l, n, p.random(1));
            network.connect(m, n, p.random(1));

            network.connect(n, o, p.random(1));
            
            network.addNeuron(a);
            network.addNeuron(b);
            network.addNeuron(c);
            network.addNeuron(d);
            network.addNeuron(e);
            network.addNeuron(f);
            network.addNeuron(g);
            network.addNeuron(h);
            network.addNeuron(i);
            network.addNeuron(j);
            network.addNeuron(k);
            network.addNeuron(l);
            network.addNeuron(m);
            network.addNeuron(n);
            network.addNeuron(o);
        }

        p.draw = () => { 
            p.background(0);
            //div.position(p.width/2, p.height/2 - 300);
            network.update();
            network.display();
            
            if (p.frameCount % 30 === 0) {
                network.feedforward(p.random(1), p.random(1));
            }
        }

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight-300);
            recreateNetwork();
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
                p.strokeWeight(this.weight * 2);
                //p.drawingContext.globalCompositeOperation = 'destination-over';
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
                for (var j = 0; j < this.connections.length; j++) {
                    this.connections[j].display();
                }
                for (var i = 0; i < this.neurons.length; i++) {
                    this.neurons[i].display();
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
                //p.stroke(0);
                p.strokeWeight(0);
                var b = p.map(this.sum, 0, 1, 255, 0);
                p.fill(b);
                p.ellipse(this.position.x, this.position.y, this.r, this.r);
                
                this.r = p.lerp(this.r, 32, 0.05);
            }
          }
    }
    
    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }
    

    render() {
        return (
            <div>
                <div id="canvastext">
                    CREATING CREATIVE, IMPACTFUL TECHNOLOGIES
                </div>
                <div className="animation" ref={this.myRef}></div>
                <IntroContainer></IntroContainer>
                <ExperienceContainer></ExperienceContainer>
                <ProjectContainer></ProjectContainer>
            </div>
        )
    }
}

export default Home;