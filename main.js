
var pacman = {
    x:3, y:3
}

var game = document.getElementById("game");

var map = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
function buildBlock(type){
    var block = document.createElement("div");

    if(type===0)
        block.setAttribute("class", "block wall");

    else if(type===1)
        block.setAttribute("class", "block air");

    else {
        block.setAttribute("id", "pacman");
        block.setAttribute("class", "block");
    }

    return block;
}

function drawMap(map){
    game.innerHTML = "";
    for(var r=0;r<map.length;r++){
        var row = document.createElement("div");
        row.setAttribute("class", "row");
        for(var c=0;c<map[r].length;c++){
            var type = map[r][c];
            if(r === pacman.y && c === pacman.x)
                type = 2;

            row.appendChild(buildBlock(type));
        }
        game.appendChild(row);
    }
}


drawMap(map);

console.dir(document.getElementById("character"))
// w -> up, a -> left, s -> down, d -> right

document.onkeydown = function(event){
    // UP
    if (event.key == "w" && map[pacman.y-1][pacman.x] !== 0){
        pacman.y = pacman.y - 1
    // LEFT
    }else if(event.key == "a" && map[pacman.y][pacman.x-1] !== 0){
        pacman.x = pacman.x - 1
    // DOWN
    }else if(event.key == "s" && map[pacman.y+1][pacman.x] !== 0){
        pacman.y = pacman.y + 1
    // RIGHT
    }else if(event.key == "d" && map[pacman.y][pacman.x+1] !== 0){
        pacman.x = pacman.x + 1
    }
    drawMap(map);
}
