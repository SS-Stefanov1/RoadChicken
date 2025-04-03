import * as THR from "three";
import { minTileIndex, maxTileIndex } from "../constants";

function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function generateRow() {
    const type = pickRandom(["car", "truck", "forest"]);

    if (type === "car")   { return generateCarLaneMetadata(); }
    if (type === "truck") { return generateTruckLaneMetadata(); }
    return generateForestLaneMetadata();
}

export function generateMap(size) {
    const rows = [];

    for (let i = 0; i < size; i++) { 
        rows.push(generateRow()); 
    }

    return rows;
}

function generateForestLaneMetadata() {
    const occupiedTiles = new Set();
    const trees = Array.from({ length : 4 }, () => { 
        let tileIndex;

        do {
            tileIndex = THR.MathUtils.randInt(minTileIndex, maxTileIndex);
        } while (occupiedTiles.has(tileIndex));

        occupiedTiles.add(tileIndex);

        const height = pickRandom([20,45,60]);

        return { tileIndex, height };
    });

    return { type : "forest", trees };
}

function generateCarLaneMetadata() {
    const direction = pickRandom([true, false]);
    const speed = pickRandom([125,156,188]);
    const occupiedTiles = new Set();

    const vehicles = Array.from({ length : 3 }, () => {
        let initialTileIndex;

        do { initialTileIndex = THR.MathUtils.randInt(minTileIndex, maxTileIndex); } while (occupiedTiles.has(initialTileIndex));

        occupiedTiles.add(initialTileIndex - 1);
        occupiedTiles.add(initialTileIndex);
        occupiedTiles.add(initialTileIndex + 1);

        const color = pickRandom([0xa52523, 0xbdb638, 0x78b14b]);

        return { initialTileIndex, color };
    });

    return { type : "car", direction, speed, vehicles };
}

function generateTruckLaneMetadata() {
    const direction = pickRandom([true,false]);
    const speed = pickRandom([75,110]);
    const occupiedTiles = new Set();

    const vehicles = Array.from({ length : 2 }, () => {
        let initialTileIndex;

        do { initialTileIndex = THR.MathUtils.randInt(minTileIndex,maxTileIndex) } while (occupiedTiles.has(initialTileIndex));

        occupiedTiles.add(initialTileIndex - 2);
        occupiedTiles.add(initialTileIndex - 1);
        occupiedTiles.add(initialTileIndex);
        occupiedTiles.add(initialTileIndex + 1);
        occupiedTiles.add(initialTileIndex + 2);

        const color = pickRandom([0xa52523, 0xbdb638, 0x78b14b]);

        return { initialTileIndex, color };
    });
console.log(vehicles);
    return { type : "truck", direction, speed, vehicles };
}