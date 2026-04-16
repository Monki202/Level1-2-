var canvas, context, player, timer, interval = 1000/60

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")

player = new GameObject(canvas.width/2, canvas.height/2, 100, 50)
player.color = "green"
player.vx = -5;
player.vy = 5;


timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

 player.move();
    if (player.x > canvas.width - player.width)
    {
        player.vx *= -1;
    }
    if (player.x < 0 + player.width/2)
    {
        player.vx = 5;
    }
    if (player.y > canvas.height - player.height)
    {
        player.vy *= -1;
    }
    if (player.y < 0 + player.height)
    {
        player.vy = 5;
    }

    player.drawCircle();
    

}

