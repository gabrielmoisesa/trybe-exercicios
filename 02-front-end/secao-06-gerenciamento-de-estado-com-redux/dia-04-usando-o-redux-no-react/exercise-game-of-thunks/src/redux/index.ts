import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore('reducer', composeWithDevTools(applyMiddleware(thunk)))