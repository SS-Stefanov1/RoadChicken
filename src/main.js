import * as THR from "three";
import { map, renderMap } from "./components/Map";
import { Renderer } from "./components/Renderer";
import { DirectionalLight } from "./components/DirectionalLight";
import { animateVehicles } from "./animateVehicles";
import { Camera } from "./components/Camera";
import { player } from "./components/Player";
import { animatePlayer } from "./animatePlayer";
import "./style.css";
import "./collectUserInput";

const scene = new THR.Scene();
scene.add(player);
scene.add(map);

const ambLight = new THR.AmbientLight();
scene.add(ambLight);

const dirLight = DirectionalLight();
dirLight.target = player;
player.add(dirLight);

const camera = Camera();
player.add(camera);

startGame();

function startGame() {
    renderMap();
}

const renderer = Renderer();
renderer.setAnimationLoop(animate);

function animate() {
    animateVehicles();
    animatePlayer();

    renderer.render(scene, camera);
}
