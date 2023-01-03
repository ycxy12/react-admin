import { useSelector, useDispatch } from "react-redux"

const View = () => {
    // 通过useSelector获取仓库数据
    // const { num } = useSelector((state: Rootstate) => ({ num: state.num })
    // 修改仓库数据
    const dispatch = useDispatch()
    const changeNum = () => {
        dispatch({ type: "add" })
    }
    return (
        <div className='home'>
            <p>这是Page1页面内容</p>
            {/* <p>{num}</p> */}
            <button onClick={changeNum}>按钮</button>
        </div>
    )
}
export default View