window.onload = function() {
    setInterval(execute, 1000 / 30);
}

let positionBallX = positionBallY = 100;

function execute() {
    let leafDrawing = document.getElementById('canvas'); 
    let drawingArea = leafDrawing.getContext('2d');


    let widthArea = 800;
    let reightArea = 600;
    let widthRede = 10; 
    let widthBall = 20; 
    let widthPlayer = 15; 
    let heightPlayer = 100; 


    drawingArea.fillStyle = '#23272a';
    drawingArea.fillRect(0, 0, widthArea, reightArea);

    //rede
    drawingArea.fillStyle = '#99aab5';
    let rede = drawingArea.fillRect(widthArea/2 - widthRede, 0, widthRede, reightArea);

    //jogador 01
    drawingArea.fillStyle = '#7289da';
    let leftPlayer = drawingArea.fillRect(widthArea - widthPlayer, 250, widthPlayer, 100);

    //jogador 02
    drawingArea.fillStyle = 'red';
    let rightPlayer = drawingArea.fillRect(0, reightArea/2 - heightPlayer/2 , widthPlayer, 100);

    //ball
    drawingArea.fillStyle = '#50555b';
    drawingArea.fillRect(positionBallX - widthBall/2 , positionBallY - widthBall/2 , widthBall, widthBall);

    positionBallX ++;
    positionBallY ++;
}