import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import Reducer from "../reducers/Reducer";
import mySaga from "../saga";
const sagaMiddleware = createSagaMiddleware()
const store= createStore(
    Reducer,
    applyMiddleware(sagaMiddleware)
)
export default store
sagaMiddleware.run(mySaga)