import * as THR from "three";
import { Grass } from "./Grass";
import { Tree } from "./Tree";
import { Road } from "./Road";
import { Car } from "./Car";
import { Truck } from "./Truck";

export const metadata = [
    {
        type : "truck",
        direction : true,
        speed : 0,
        vehicles: [{ initialTileIndex : -4, color : 0x00ff00 }],
    },{
        type  : "car", 
        direction : false,
        speed : 1,
        vehicles : [{ initialTileIndex : 2, color : 0xff0000 }],

    },{
        type  : "tree",
        trees : [
            { tileIndex : -3, height : 50 },
            { tileIndex : 2,  height : 30 },
            { tileIndex : 5,  height : 50 },
        ],
    },
];

export const map = new THR.Group();

export function addRows() {
    metadata.forEach((row,i) => {
        if (row.type === "tree") {
            row.trees.forEach(({ tileIndex, height }) => {
                Grass(i + 1).add(Tree(tileIndex, height));
            })
        } 
        if (row.type === "car") {
            row.vehicles.forEach((vehicle) => {
                const car = Car(
                    vehicle.initialTileIndex,
                    row.direction,
                    vehicle.color
                );

                Road(i + 1).add(car);
            });

            map.add(Road(i + 1));
        }
        if (row.type === "truck") {
            row.vehicles.forEach((vehicle) => {
                const truck = Truck(
                    vehicle.initialTileIndex,
                    row.direction,
                    vehicle.color
                );
                Road(i + 1).add(truck);
            });
            map.add(Road(i + 1));
        }
    });
}

export function renderMap() {
    for (let ri = 0; ri > -5; ri--) {
        map.add(Grass(ri));
    }

    addRows();
}