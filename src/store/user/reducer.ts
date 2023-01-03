import handler from "./index"

let reducer = (state = { ...handler.state }, action: { type: string }) => {
    let newState = JSON.parse(JSON.stringify(state))

    //判断是否有对应的调用函数
    if (handler.actions.hasOwnProperty(action.type)) {
        handler.actions[action.type](newState, action)
    }

    return newState
}
export default reducer
