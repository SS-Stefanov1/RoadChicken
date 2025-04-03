import * as THR from "three";
import { tilesPerRow, tileSize } from "../constants";

export function Road(rowIndex) {
    const road = new THR.Group();
    road.position.y = rowIndex * tileSize;

    const foundation = new THR.Mesh(
        new THR.PlaneGeometry(tilesPerRow * tileSize, tileSize),
        new THR.MeshLambertMaterial({ color : 0x454a59 }),
    );

    foundation.receiveShadow = true;

    road.add(foundation);
    return road;
}