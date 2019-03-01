var diet = new Image();
var d2 = new Image();
var d3 = new Image();
var d4 = new Image();
var d5 = new Image();
var d6 = new Image();
var d7 = new Image();
var d8 = new Image();
var d9 = new Image();
var d10 = new Image();
var d11 = new Image();
function init() {
  diet.src = '../images/dish/diet.jpg';
  d2.src = '../images/dish/2.png';
  d3.src = '../images/dish/3.png';
  d4.src = '../images/dish/4.png';
  d5.src = '../images/dish/5.png';
  d6.src = '../images/dish/6.png';
  d7.src = '../images/dish/7.png'; 
  d8.src = '../images/dish/8.png';
  d9.src = '../images/dish/9.png';
  d10.src = '../images/dish/10.png'; 
  d11.src = '../images/dish/11.png';

  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  var time = new Date();
  ctx.rotate((1*((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds()));
  ctx.translate(105, 0);
 
  ctx.drawImage(d3, -30,-30,40,40);
  ctx.drawImage(d4, -80,-30,40,40);

  ctx.drawImage(d2, -30, -80,40,40);
  ctx.drawImage(d5, -80, -80,40,40);

  
  ctx.drawImage(d6, -30, 10,40,40);
  ctx.drawImage(d7, -80, 10,40,40);

  
  
  ctx.drawImage(d8, -30, 50,40,40);
  ctx.drawImage(d9, -80, 50,40,40);

  
  ctx.restore();
  
  ctx.drawImage(diet, 0,0,148,54,100, 130,148*40/54,40);

  window.requestAnimationFrame(draw);
}

init();
