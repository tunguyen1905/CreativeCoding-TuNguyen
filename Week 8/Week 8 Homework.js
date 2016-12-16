// Tu Nguyen
//Week 8 Homework - ParticleSystem

var system;

function setup() {
  createCanvas(500,500);
  system = new ParticleSystem(createVector(250, 250));
}

function draw() {
  background(0);
  system.addParticle();
  system.run();
}

var Particle = function(position) {
  this.acceleration = createVector(0,0);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = position.copy();
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
};

Particle.prototype.display = function() {
  stroke(random(255),random(255),200, 40);
  strokeWeight(random(100));
  noFill();
  rect(random(250),random(250),this.position.x, this.position.y);
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
  
  }
};
