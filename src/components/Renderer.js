import * as THR from "three";

export function Renderer() {
    const canvas = document.querySelector("canvas#game");
    if (!canvas) { alert("Canvas Empty.."); }

    const render = new THR.WebGLRenderer({
        alpha: true,
        antialias: true,
        canvas: canvas,
    });

    render.setPixelRatio(window.devicePixelRatio);
    render.setSize(window.innerWidth, window.innerHeight);
    render.shadowMap.enabled = true;

    return render;
}
