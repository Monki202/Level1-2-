var canvas, context, player, timer, interval = 1000/60

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")

player = new GameObject(canvas.width/2, canvas.height/2, 100, 50)
player.color = "green"
player.vx = -5;
//player.vy = 5;


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    player.move();
    player.drawCircle();
    

}

