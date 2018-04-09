window.onload = function() {
	canv = document.getElementById("snake");
	ctx = canv.getContext("2d");
	document.addEventListener("keydown", keyPush);
	setInterval(snake, 1000/10);
}
let playerX=playerY=10;
let gridSize=tileCount=20;
let appleX=appleY=15;
let xVelocity=yVelocity=0;
let trail = [];
let tail = 5;

function snake() {
	playerX+=xVelocity;
	playerY+=yVelocity;
	
	if(playerX < 0) {
		playerX = tileCount-1;
	}
	if(playerX > tileCount-1) {
		playerX = 0;
	}
	if(playerY < 0) {
		playerY = tileCount-1;
	}
	if(playerY > tileCount-1) {
		playerY = 0;
	}
	ctx.fillStyle="DodgerBlue";
    ctx.fillRect(0,0,canv.width,canv.height);
	
	ctx.fillStyle="DeepPink";
	for(var i=0; i<trail.length;i++){
		ctx.fillRect(trail[i].x*gridSize,trail[i].y*gridSize, gridSize-2, gridSize-2);
		ctx.strokeStyle="black";
		ctx.lineWidth=2;
		ctx.strokeRect(trail[i].x*gridSize,trail[i].y*gridSize, gridSize-2, gridSize-2);
		if(trail[i].x==playerX && trail[i].y==playerY){
			tail = 5;
		}
	}
	trail.push({
		x:playerX,
		y:playerY
	});
	while(trail.length>tail){
		trail.shift();
	}
	if(appleX==playerX && appleY==playerY){
		tail++
		appleX=Math.floor(Math.random()*tileCount);
		appleY=Math.floor(Math.random()*tileCount);
	}
	
	ctx.fillStyle="DarkOrange";
	ctx.fillRect(appleX*gridSize,appleY*gridSize,gridSize-2,gridSize-2);
	ctx.strokeStyle="black";
	ctx.lineWidth=2;
	ctx.strokeRect(appleX*gridSize,appleY*gridSize,gridSize-2,gridSize-2);
}

function keyPush(evt) {
	switch(evt.keyCode) {
        case 37:
            xVelocity=-1;yVelocity=0;
            break;
        case 38:
            xVelocity=0;yVelocity=-1;
            break;
        case 39:
            xVelocity=1;yVelocity=0;
            break;
        case 40:
            xVelocity=0;yVelocity=1;
            break;
    }
}