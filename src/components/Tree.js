import * as THR from "three";
import { tileSize } from "../constants";

export function Tree(tileIndex, height) {
    const tree = new THR.Group();
    tree.position.x = tileIndex * tileSize;

    const base = new THR.Mesh(
        new THR.BoxGeometry(15,15,20),
        new THR.MeshLambertMaterial({
            color : 0x4d2926,
            flatShading : true,
        })
    );
    base.position.z = 10;
    tree.add(base);

    const crown = new THR.Mesh(
        new THR.BoxGeometry(30,30,height),
        new THR.MeshLambertMaterial({
            color : 0x7aa21d,
            flatShading : true,
        })
    );

    crown.position.z = height / 2 + 20;
    tree.add(crown);

    return tree;
}