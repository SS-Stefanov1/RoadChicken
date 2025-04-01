import * as THR from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Truck(initialTileIndex, direction, color) {
    const truck = new THR.Group();
    truck.position.x = initialTileIndex * tileSize;
    if (!direction) { truck.rotation.z = Math.PI; }

    const cargo = new THR.Mesh(
        new THR.BoxGeometry(70,35,35),
        new THR.MeshLambertMaterial({
            color : 0xb4c6fc,
            flatShading : true,
        })
    );

    cargo.position.x = -15;
    cargo.position.z = 25;
    truck.add(cargo);

    const cabin = new THR.Mesh(
        new THR.BoxGeometry(30,30,30),
        new THR.MeshLambertMaterial({
            color,
            flatShading : true,
        })
    );

    cabin.position.x = 35;
    cabin.position.z = 20;
    truck.add(cabin);

    const frontWheel = Wheel(37);
    truck.add(frontWheel);

    const midWheel = Wheel(5);
    truck.add(midWheel);

    const backWheel = Wheel(-35);
    truck.add(backWheel);

    return truck;
}