import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import shoppingcar from "./reducers/shoppingcar"
const reducer=combineReducers({
    shoppingcar
})
const strore=createStore(reducer,applyMiddleware(reduxThunk))
export default strore;