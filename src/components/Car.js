import * as THR from "three";
import { tileSize } from "../constants";
import { Wheel } from "./Wheel";

export function Car(initialTileIndex, direction, color) {
    const car = new THR.Group();
    car.position.x = initialTileIndex * tileSize;
    if (!direction) { car.rotation.z = Math.PI; }

    const main = new THR.Mesh(
        new THR.BoxGeometry(60,30,15),
        new THR.MeshLambertMaterial({ color, flatShading : true }),
    );

    main.position.z = 12;
    main.castShadow = true;
    main.receiveShadow = true;
    car.add(main);

    const cabin = new THR.Mesh(
        new THR.BoxGeometry(33,24,12),
        new THR.MeshLambertMaterial({   
            color : "white", 
            flatShading : true,
        })
    );

    cabin.position.x = -6;
    cabin.position.z = 25.5;
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    car.add(cabin);

    const frontWheel = Wheel(18);
    car.add(frontWheel);

    const backWheel  = Wheel(-18);
    car.add(backWheel);

    return car;
}