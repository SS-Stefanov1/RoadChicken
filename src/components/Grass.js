import * as THR from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Grass(rowIndex) {
    const grass = new THR.Group();
    grass.position.y = rowIndex * tileSize;

    const foundation = new THR.Mesh(
        new THR.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
        new THR.MeshLambertMaterial({ color : 0xbaf455 }),
    );

    foundation.position.z = 1.5;
    foundation.receiveShadow = true;
    grass.add(foundation);

    return grass;
}