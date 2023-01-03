const store = {
    state: {
        token: null,
        userInfo: null,
    },
    actions: {
        //登录
        Login(state: { token: string }, action: { type: string; val: string }) {
            state.token = action.val
        },
        //获取用户信息
        GetUserInfo(state: { userInfo: object }, action: { type: string; val: object }) {
            state.userInfo = action.val
        },
        //退出登录
        Logout(state: { userInfo: object }, action: { type: string; val: object }) {
            state.userInfo = action.val
        },
    },
}

export default store
