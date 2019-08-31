import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import shoppingcar from "./reducers/shoppingcar"
import detail from "./reducers/detail"
import login from "./reducers/login"
import footers from "./reducers/footers"
const reducer=combineReducers({
    shoppingcar,
    detail,
    login,
    footers
})
const strore=createStore(reducer,applyMiddleware(reduxThunk))



export default strore;