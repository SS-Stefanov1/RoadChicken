import * as THR from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player } from "./components/Player";
import "./style.css";

const scene = new THR.Scene();
scene.add(player);

const ambLight = new THR.AmbientLight();
scene.add(ambLight);

const dirLight = new THR.DirectionalLight();
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);

const camera = Camera();
scene.add(camera);

const renderer = Renderer();
renderer.render(scene, camera);
