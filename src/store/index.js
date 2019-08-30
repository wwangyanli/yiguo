import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import shoppingcar from "./reducers/shoppingcar"
import search from "./reducers/search"
import choose from "./reducers/choose"
const reducer=combineReducers({
    shoppingcar,
    search,
    choose

})
const strore=createStore(reducer,applyMiddleware(reduxThunk))
export default strore;