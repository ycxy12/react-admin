import { legacy_createStore, combineReducers, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import user from "./user/reducer"

// 组合各个模块的reducer
const reducers = combineReducers({
    user,
})

// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
const store = legacy_createStore(reducers, applyMiddleware(reduxThunk))
export default store
