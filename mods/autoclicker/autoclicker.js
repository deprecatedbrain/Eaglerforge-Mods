let CURRENT_CPS = 20;
let TOGGLE_KEYBIND = 22;
let toggled = false;

ModAPI.addEventListener("key", event => {
    if (event.key === TOGGLE_KEYBIND) {
        toggled = !toggled;
    }
});

let autoClickInterval = setInterval(() => {
    if (toggled) {
        ModAPI.clickMouse();
    }
}, 1000 / CURRENT_CPS);
