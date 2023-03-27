import { ResLogin, ReqLoginForm } from "@/api/interface/index"
import request from "@/common/axios"
/**
 * @name 登录模块
 */

// * 用户登录接口
export const loginApi = (params: ReqLoginForm) => {
    return request.post<ResLogin>("/api/login", params)
}

// * 获取菜单列表
export const getMenuList = () => {
    return request.get<Menu.MenuOptions[]>("/api/menu/list")
}
