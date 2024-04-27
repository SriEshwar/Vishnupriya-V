
var blockSize=25;
var row=20;
var column=20;
var board;
var context;

//head 
var snakeX=blockSize*5;
var snakeY=blockSize*5;

//food
var foodX;
var foodY;

var velocityx=0;
var velocityy=0;

var snakebody=[]; 

window.onload=function(){
    board=document.getElementById("board");
    board.height=row*blockSize;
    board.width=column*blockSize;
    context=board.getContext("2d");

    placefood()
    document.addEventListener("keyup",changeDirection);
   // update();
   setInterval(update,1000/10);
}
function update(){
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);

    
    context.fillStyle="red";
    context.fillRect(foodX,foodY,blockSize,blockSize); 

    if(snakeX==foodX && snakeY==foodY){
        snakebody.push([foodX,foodY])
        placefood();
    }

    for(let i=snakebody.length-1;i>0;i--){
        snakebody[i]=snakebody[i-1];
    }
    if(snakebody.length){
        snakebody[0]=[snakeX,snakeY];
    }
    context.fillStyle="green";
    snakeX += velocityx+blockSize;
    snakeY += velocityy+blockSize;
    context.fillRect(snakeX,snakeY,blockSize,blockSize);
    for(let i=0;i<snakebody.length;i++ ){
        context.fillRect(snakebody[i][0],snakebody[i][1],blockSize,blockSize);
    }

}

function placefood(){
    foodX=Math.floor(Math.random()*row)*blockSize;
    foodY=Math.floor(Math.random()*column)*blockSize;
}
function changeDirection(e){
    if(e.code=="ArrowUp" && velocityy !=1){
    velocityx=0;
    velocityy=-1;
    }
    if(e.code=="ArrowDown" && velocityy !=-1 ){
        velocityx=0;
        velocityy=1;
    }
    if(e.code=="ArrowLeft" && velocityx !=1){
            velocityx=-1;
            velocityy=0;
    }
    if(e.code=="ArrowRight"  &&  velocityy !=-1){
                velocityx=1;
                velocityy=0;
    }
}

