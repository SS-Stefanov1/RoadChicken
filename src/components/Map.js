import * as THR from "three";
import { Grass } from "./Grass";
import { Tree } from "./Tree";
import { Road } from "./Road";
import { Car } from "./Car";
import { Truck } from "./Truck";
import { generateMap } from "../utilities/generateMap";

export const metadata = [];
export const map = new THR.Group();

export function addRows() {
    const newMetadata = generateMap(20);
    const startIndex = metadata.length;

    metadata.push(...newMetadata);

    newMetadata.forEach((row,i) => {
        const rowIndex = startIndex + i + 1;

        if (row.type === "forest") {
            const forest_row = Grass(rowIndex);

            row.trees.forEach(({ tileIndex, height }) => {
                forest_row.add(Tree(tileIndex, height));
            })

            map.add(forest_row);
        } 
        if (row.type === "car") {
            const car_row = Road(rowIndex);

            row.vehicles.forEach((vehicle) => {
                const car = Car(
                    vehicle.initialTileIndex,
                    row.direction,
                    vehicle.color
                );
                vehicle.ref = car;
                car_row.add(car);
            });

            map.add(car_row);
        }
        if (row.type === "truck") {
            const truck_row = Road(rowIndex);

            row.vehicles.forEach((vehicle) => {
                const truck = Truck(
                    vehicle.initialTileIndex,
                    row.direction,
                    vehicle.color
                );
                vehicle.ref = truck;
                truck_row.add(truck);
            });
            map.add(truck_row);
        }
    });
}

export function renderMap() {
    metadata.length = 0;

    for (let ri = 0; ri > -10; ri--) {
        map.add(Grass(ri));
    }

    addRows();
}