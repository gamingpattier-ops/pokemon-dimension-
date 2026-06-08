const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = { x: 50, y: 50, size: 20 };
let portal = { x: 300, y: 200, size: 30 };

let world = 1;

document.addEventListener("keydown", move);

function move(e) {
    if (e.key === "ArrowUp") player.y -= 10;
    if (e.key === "ArrowDown") player.y += 10;
    if (e.key === "ArrowLeft") player.x -= 10;
    if (e.key === "ArrowRight") player.x += 10;
}

function checkPortal() {
    if (
        player.x < portal.x + portal.size &&
        player.x + player.size > portal.x &&
        player.y < portal.y + portal.size &&
        player.y + player.size > portal.y
    ) {
        world++;
        if (world > 7) world = 1;

        player.x = 50;
        player.y = 50;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Couleur selon génération
    const colors = ["black","green","blue","purple","orange","red","cyan"];
    ctx.fillStyle = colors[world - 1];
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // joueur
    ctx.fillStyle = "white";
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // portail
    ctx.fillStyle = "yellow";
    ctx.fillRect(portal.x, portal.y, portal.size, portal.size);

    checkPortal();

    requestAnimationFrame(draw);
}

draw();
