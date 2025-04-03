import * as THR from "three";
import { endsUpInValidPosition } from "../utilities/endsUpInValidPoition";
import { metadata as rows, addRows } from "./Map";
import { add } from "three/tsl";

export const player = Player();

function Player() {
    const player = new THR.Group();

    const body = new THR.Mesh(
        new THR.BoxGeometry(15, 15, 20),
        new THR.MeshLambertMaterial({
            color: "white",
            flatShading: true,
        })
    );

    body.position.z = 10;
    body.castShadow = true;
    body.receiveShadow = true;
    player.add(body);

    const cap = new THR.Mesh(
        new THR.BoxGeometry(2,4,2),
        new THR.MeshLambertMaterial({
            color : 0xf0619a,
            flatShading : true,
        })
    );

    cap.position.z = 21;
    cap.castShadow = true;
    cap.receiveShadow = true;
    player.add(cap);

    const playerContainer = new THR.Group();
    playerContainer.add(player);

    return playerContainer;
}

export const position = {
    currentRow : 0,
    currentTile : 0,
}

export const movesQueue = [];

export function queueMove(direction) {
    const isValid = endsUpInValidPosition({
        rowIndex : position.currentRow,
        tileIndex: position.currentTile,
    }, [...movesQueue, direction]);

    if (!isValid) { return; }

    movesQueue.push(direction);
}

export function stepCompleted() {
    const direction = movesQueue.shift();

    if (direction === "forward")  { position.currentRow  += 1; }
    if (direction === "backward") { position.currentRow  -= 1; }
    if (direction === "left")     { position.currentTile -= 1; }
    if (direction === "right")    { position.currentTile += 1; }

    if (position.currentRow > rows.length - 10) { addRows(); }
}