function setup() {
  createCanvas(1000, 1000);
}
let olhoX;
let olhoY;

function draw() {
  background("#DBA7E4");
    fill("#FCEEC4")
circle (200,200,300);//rosto
    fill("#FFFFFF")
circle (150,150,60);//olho esquerdo
circle(250,150,60);//olhodireito
  ellipse(194, 293, 50, 50);
//nariz
  fill("#B0D1E0")
 ellipse( 192, 209, 50, 80, 80);
   line(123,115,178,113);// sobrancelha esquerda
   line(225,116,279,106);// sobrancelha direita
  circle(150,150,40);// 
  circle(250,150,40);//
  olhoX = map(mouseX, 0, 400, 132, 166);
  olhoY = map(mouseY, 0, 400, 130, 170);
  circle(olhoX, olhoY, 40);// nova pupila esquerda
  circle(olhoX + 100, olhoY, 40);// nova pupila direita
  
   if (mouseIsPressed) {
     console.log(mouseX, mouseY);}

}
