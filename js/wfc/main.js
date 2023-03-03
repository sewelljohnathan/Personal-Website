


let world = []

const CANVAS_W = 1200;
const CANVAS_H = 900;
const WORLD_W = 20;
const WORLD_H = WORLD_W*(CANVAS_H/CANVAS_W);
const TILE_COUNT = 5;
const TILES = [
    [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ],
    [
        [0,1,0],
        [1,1,1],
        [0,0,0]
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,1,0]
    ],
    [
        [0,1,0],
        [1,1,0],
        [0,1,0]
    ],
    [
        [0,1,0],
        [0,1,1],
        [0,1,0]
    ]
]

class Cell {
    constructor(y, x) {
        this.y = y;
        this.x = x;
        this.options = [];
        for (let i = 0; i < TILE_COUNT; i++) {
            this.options.push(1);
        }
        this.value = -1;
    }
}

function init(ctx) {

    world = [];
    for (let y = 0; y < WORLD_H; y++) {
        world.push([]);
        for (let x = 0; x < WORLD_W; x++) {
            world[y].push(new Cell(y, x))
        }
    }
}

function draw(ctx, frameCount) {

    drawTiles(ctx);


    let isDone;
    if (frameCount % 2 === 0) {
        isDone = collapse(ctx);
    }

    if (isDone) {
        init(ctx);
    }
}

function propagate(cell) {

    let y = cell.y;
    let x = cell.x;

    for (let i = 0; i < TILE_COUNT; i++) { // each possible tile

        for (let j = 0; j < 3; j++) { // each of the 3 pixels bordering 

            if (y - 1 >= 0 && TILES[i][2][j] !== TILES[cell.value][0][j]) {
                world[cell.y-1][x].options[i] = 0;
            }

            if (y + 1 <= WORLD_H - 1 && TILES[i][0][j] !== TILES[cell.value][2][j]) {
                world[y+1][x].options[i] = 0;
            }

            if (x - 1 >= 0 && TILES[i][j][2] !== TILES[cell.value][j][0]) {
                world[y][x-1].options[i] = 0;
            }

            if (x + 1 <= WORLD_W - 1 && TILES[i][j][0] !== TILES[cell.value][j][2]) {
                world[y][x+1].options[i] = 0;
            }
        }
    }   
}


function collapse(ctx) {

    // Get the lowest entropy cell
    let lowestEntropyCell;
    let lowestEntropy = TILE_COUNT + 1;
    for (let y = 0; y < WORLD_H; y++) {
        for (let x = 0; x < WORLD_W; x++) {
            
            let curCell = world[y][x];
            if (curCell.value === -1) {

                let entropy = 0;
                for (let i = 0; i < TILE_COUNT; i++) {
                    entropy += curCell.options[i];
                }

                if (entropy < lowestEntropy) {
                    lowestEntropyCell = curCell;
                    lowestEntropy = entropy;
                }
            }
        }
    }
    
    if (lowestEntropyCell === undefined) {
        return true;
    }

    // Choose the collapse
    let collapseValue;
    do {
        collapseValue = Math.floor(Math.random() * TILE_COUNT);
    } while (lowestEntropyCell.options[collapseValue] === 0);

    // Collapse
    for (let i = 0; i < TILE_COUNT; i++) {
        if (i !== collapseValue) {
            lowestEntropyCell.options[i] = 0;
        }
    }
    lowestEntropyCell.value = collapseValue;

    // Propagate
    propagate(lowestEntropyCell);

    return false;
    
}

function drawTiles(ctx) {
    for (let y = 0; y < WORLD_H; y++) {
        for (let x = 0; x < WORLD_W; x++) {

            let curCell = world[y][x];
            let optionCount = 0;
            for (let i = 0; i < TILE_COUNT; i++) {
                if (curCell.options[i] === 1) {
                    optionCount++;
                }
            }

            for (let i = 0; i < TILE_COUNT; i++) {
                if (curCell.options[i] === 0) {
                    continue;
                }

                for (let tileY = 0; tileY < 3; tileY++) {
                    for (let tileX = 0; tileX < 3; tileX++) {

                        let color; 
                        switch (TILES[i][tileY][tileX]) {
                            case 0: color = `rgba(0, 255, 255, ${1/optionCount})`; break;
                            case 1: color = `rgba(250, 128, 114, ${1/optionCount})`; ; break;
                        }

                        let rX = x*(CANVAS_W/WORLD_W) + tileX*(CANVAS_W/WORLD_W)/3;
                        let rY = y*(CANVAS_H/WORLD_H) + tileY*(CANVAS_H/WORLD_H)/3;
                        let rW = (CANVAS_W/WORLD_W)/3;
                        let rH = (CANVAS_H/WORLD_H)/3;
                        ctx.fillStyle = color;
                        ctx.fillRect(rX, rY, rW, rH);

                    }
                }
            }
        }
    }

}


export {
    draw,
    init,
}
