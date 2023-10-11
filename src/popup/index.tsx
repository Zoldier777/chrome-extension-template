import {createRoot} from 'react-dom/client';
import React from 'react';
import Popup from "./popup";

function init() {
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer)
    console.log(appContainer)
    root.render(<Popup/>); // RENDER MAIN COMPONENT

}
init()
    