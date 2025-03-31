import * as THR from "three";
import { Grass } from "./Grass";

export const map = new THR.Group();

export function renderMap() {
    map.add(Grass(0));
}