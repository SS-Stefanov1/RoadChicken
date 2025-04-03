import { queueMove } from "./components/Player";

document.getElementById("forward")?.addEventListener("click",  () => queueMove("forward"));
document.getElementById("backward")?.addEventListener("click", () => queueMove("backward"));
document.getElementById("left")?.addEventListener("click",     () => queueMove("left"));
document.getElementById("right")?.addEventListener("click",    () => queueMove("right"));

window.addEventListener("keydown", (e) => {
         if (e.key === "ArrowUp")    { e.preventDefault(); queueMove("forward"); }
    else if (e.key === "ArrowDown")  { e.preventDefault(); queueMove("backward"); }
    else if (e.key === "ArrowLeft")  { e.preventDefault(); queueMove("left"); }
    else if (e.key === "ArrowRight") { e.preventDefault(); queueMove("right"); }
});