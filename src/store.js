import { appreducer, initialState } from "./reduser";

import { legacy_createStore as createStore } from "redux";

export const store = createStore(appreducer, initialState);
