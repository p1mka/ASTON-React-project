import { createListenerMiddleware } from "@reduxjs/toolkit";

import { toggleAuth } from "../slices";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: toggleAuth,
    effect: async (action, api) => {
        console.log(action, api.getState().auth);
        // if (!api.getState().auth.auth) {
        //   console.log(first)(`Logging Out!`);
        // }
        // if (api.getState().auth.auth && !api.getState().auth.initializeSuccess) {
        //   console.log('Login successful!');
        // }
    },
});
// startAppListening({
//     actionCreator: toggleAuth,
//     effect: (action, api) => {
//         console.log(api);
//         // if (!api.getState().auth.auth) {
//         //   console.log(first)(`Logging Out!`);
//         // }
//         // if (api.getState().auth.auth && !api.getState().auth.initializeSuccess) {
//         //   console.log('Login successful!');
//         // }
//     },
// });
