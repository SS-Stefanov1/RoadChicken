import * as THR from "three";
import { metadata as rows } from "./components/Map";
import { minTileIndex, maxTileIndex, tileSize } from "./constants";

const clock = new THR.Clock();

export function animateVehicles() {
    const delta = clock.getDelta();

    rows.forEach((row) => {
        if (row.type === "car" || row.type === "truck") {
            const rowStart = (minTileIndex - 2) * tileSize;
            const rowEnd   = (maxTileIndex + 2) * tileSize;

            row.vehicles.forEach(({ ref }) => {
                if (!ref) { throw Error("No vehicle reference."); }

                if (row.direction) { ref.position.x > rowEnd ? rowStart : ref.position.x + row.speed * delta; }
                else { ref.position.x = ref.position.x < rowStart ? rowEnd : ref.position.x - row.speed * delta; }
            });
        }
    });
}