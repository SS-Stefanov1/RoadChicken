import * as THR from "three";

export function Wheel(x) {
    const wheel = new THR.Mesh(
        new THR.BoxGeometry(12,33,12),
        new THR.MeshLambertMaterial({
            color : 0x333333,
            flatShading : true,
        })
    );

    wheel.position.x = x;
    wheel.position.z = 6;

    return wheel;
}