import * as THR from "three";

//prettier-ignore
export function Camera() {
    const size   = 300;
    const vRatio = window.innerWidth / window.innerHeight;
    const width  = vRatio < 1 ? size : size * vRatio;
    const height = vRatio < 1 ? size / vRatio : size;
    const camera = new THR.OrthographicCamera(
        width  / -2, // Left
        width  /  2, // Right
        height /  2, // Top
        height / -2, // Bottom
        100, // Near
        900  // Distance
    );

    camera.up.set(0, 0, 1);
    camera.position.set(300, -300, 300);
    camera.lookAt(0, 0, 0);

    return camera;
}
