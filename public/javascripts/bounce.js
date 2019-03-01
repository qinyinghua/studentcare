
var s = new Image();
var i1 = new Image();
var i2 = new Image();
var i3 = new Image();
var i4 = new Image();
var i5 = new Image();
var i6 = new Image();
var y1=10;
var y2=50;
var y3=40; 
var y4=18; 
var y5=20; 
var y6=60; 
var dy1=2;
var dy2=-2;
var dy3=1;
var dy4=-1.5;
var dy5=1;
var dy6=-1.5;

window.onload=init;
function init() {
  i1.src = '../images/bouncefood/egg.jpg';
  i2.src = '../images/bouncefood/cookie.jpg';
  i3.src = '../images/bouncefood/coffee.jpg';
  i4.src = '../images/bouncefood/pizza.jpeg';
  i5.src = '../images/bouncefood/burger.jpeg';
  i6.src = '../images/bouncefood/yogurt.jpg';
  s.src = '../images/bouncefood/scale.jpeg';


  window.requestAnimationFrame(animate);
}

function animate() {
  var can = document.getElementById('canvas').getContext('2d');


  can.globalCompositeOperation = 'destination-over';
  can.save();
  can.translate(425, 0);
  can.clearRect(0, 0, 300, 300); // clear canvas
  can.strokeRect(0, 0, 300,300);
  can.translate(150, 75);
  can.drawImage(i1, -110,y1,50,50);
  can.drawImage(i2, 70, y2,50,50);
  can.drawImage(i3, -60,y3,50,50);
  can.drawImage(i4, -10,y4,50,50);
  can.drawImage(i5, 40, y5,50,50);
  can.drawImage(i6, -140,y6,50,50);
  can.drawImage(s,-150, 50,300,200);

  
  y1+=dy1;
  if ((y1 < 0) || (y1 > 100)) dy1 = -dy1;
  y2+=dy2;
  if ((y2 < 0) || (y2 > 100)) dy2 = -dy2;
  y3+=dy3;
  if ((y3 < 0) || (y3 > 100)) dy3 = -dy3;
  y4+=dy4;
  if ((y4 < 0) || (y4 > 100)) dy4 = -dy4;
  y5+=dy5;
  if ((y5 < 0) || (y5 > 100)) dy5 = -dy5;
  y6+=dy6;
  if ((y6 < 0) || (y6 > 100)) dy6 = -dy6;
  


  can.restore();
  



  window.requestAnimationFrame(animate);
}

init();
