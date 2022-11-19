import * as functions from "./modules/functions.js";

functions.isWebp();

window.onload = () => {
    setTimeout(() => {
        document.body.classList.add('loaded')
        Draggable.create('.gallery', { 
            bounds: 'body',
            inertia: true
        })
    }, 200);
}