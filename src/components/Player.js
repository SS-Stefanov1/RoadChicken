import * as THR from "three";

export const player = Player();

function Player() {
    const body = new THR.Mesh(
        new THR.BoxGeometry(15, 15, 20),
        new THR.MeshLambertMaterial({
            color: "white",
            flatShading: true,
        })
    );

    body.position.z = 10;
    return body;
}
