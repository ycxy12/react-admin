// 【重点】类型声明里面不要直接使用引入import...from... （import store from "@/store"）,
//  而是使用 import("") 可以直接使用 不需要引入

// TS中提供了ReturnType，用来获取函数类型的返回值
type Rootstate = ReturnType<typeof import("@/store").getstate>
