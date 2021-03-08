window.onload = function() {
    // Executa repetidamente a cada 30 quadros por segundos
    setInterval(execute, 1000 / 30);
}

let positionBallX = positionBallY = 0;
let speedBallX = speedBallY = 10; 
let positionPlayer1 = positionPlayer2 = 60;
let scorePlayer1 = scorePlayer2 = 0;

let leafDrawing = document.getElementById('canvas'); 
let drawingArea = leafDrawing.getContext('2d');
    
let reightArea = 600;
let widthArea = 800;
let widthRede = 10; 
let diameterBall = 20; 
let widhtRacket = 15; 
let reightRacket = 100;
let effectRacket = .3;


// Mover to Players
leafDrawing.addEventListener('mousemove', (event) => {
    positionPlayer1 = event.clientY - reightRacket / 2;

});

function execute() {
    
    // Table
    drawingArea.fillStyle = '#23272a';
    drawingArea.fillRect(0, 0, widthArea, reightArea);

    // Grid
    drawingArea.fillStyle = '#99aab5';
    drawingArea.fillRect(widthArea / 2 - widthRede / 2, 0, widthRede, reightArea);

    // Ball
    drawingArea.fillStyle = '#50555b';
    drawingArea.fillRect(positionBallX - diameterBall/2 , positionBallY - diameterBall/2 , diameterBall, diameterBall);

    positionBallY = positionBallY + speedBallY;
    positionBallX = positionBallX + speedBallX;

    // Player Racket 01
    drawingArea.fillStyle = '#7289da';
    // drawingArea.fillRect(10, positionPlayer1 / 2 - reightRacket / 2, widhtRacket, reightRacket);
    drawingArea.fillRect(10, positionPlayer1 , widhtRacket, reightRacket);

    // Player Racket 02
    drawingArea.fillStyle = '#374e9d';
    drawingArea.fillRect((widthArea - widhtRacket) - 10, positionPlayer2 / 2 - reightRacket / 2 , widhtRacket, reightRacket);

    // Score
    drawingArea.fillText("PLayer 1 " +scorePlayer1+ " Score", (widthArea/2) - 250, 100);
    drawingArea.fillText("PLayer 2 " +scorePlayer2+ " Score", widthArea - 250, 100);
    
   
    // (Superior) Invertendo a posicao Y da ball caso toque na lateral do campo
    if (positionBallY > reightArea && speedBallY > 0) {                                                                                                                                                                             
        speedBallY = - speedBallY;
    }
    // (Inferior) Invertendo a posicao Y da ball caso toque na lateral do campo
    if (positionBallY < 0 && speedBallY < 0 ) {
        speedBallY = - speedBallY;
    }
    
    // Verificando se o Player2 fez ponto
    if (positionBallX < 0) {
        if (positionBallY > positionPlayer1 && positionBallY < positionPlayer1 + reightRacket) {
            speedBallX = - speedBallX;

            let diferenceY = positionBallY - (positionPlayer1 + reightRacket /2);
            speedBallY = diferenceY * effectRacket; 
        }else {
            scorePlayer2 ++;

            positionBallX = widthArea / 2;
            positionBallY = reigthArea / 2;
           
        }
    }

    // Verificando se o Player1 fez ponto
     if(positionBallX > widthArea) {
        if(positionBallY > positionPlayer2 && positionBallY < positionPlayer2 + reightRacket) { 
            speedBallX = -speedBallX;

            let diferenceY = positionBallY - (positionPlayer2 + reightRacket /2);
            speedBallY = diferenceY * effectRacket; 
        }else {
            scorePlayer1 ++;
        }
     }
}