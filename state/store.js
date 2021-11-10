// import { createStore, applyMiddleware } from "redux";
// import reducers from "./reducers/index";


// export const store = createStore(
//     reducers,
//     {},
//     applyMiddleware(thunk)
// );


import { configureStore } from '@reduxjs/toolkit'

import reducers from "./reducers/index";

export const store = configureStore({ reducer: reducers })