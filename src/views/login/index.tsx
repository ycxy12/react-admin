import { Button, Checkbox, Form, Input, message } from 'antd';
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss'

const Login = () => {
    //跳转
    const navigate = useNavigate()

    // 通过 useSelector 获取仓库数据
    const { userInfo } = useSelector((state: RootState) => ({
        userInfo: state.user.userInfo,
    }))

    // 通过 useDispatch 修改仓库数据
    const dispatch = useDispatch();
    const userLogin = (loginLorm: { username: string, password: string, remember: boolean }) => {
        // type:调用的方法名  val：传参数据, 触发了reducer函数的执行
        // dispatch({ type: "Login", val: loginLorm })
        dispatch((dis: Function) => {
            dis({ type: "Login", val: loginLorm })
        })
    }


    const onFinish = (values: { username: string, password: string, remember: boolean }) => {
        const { username, password } = values
        if (username === 'admin' && password === '123456') {
            console.log('Received values of form: ', values);
            userLogin(values)
            // navigate('/')
        } else {
            message.error("用户名不存在或密码错误")
        }

    };

    return (
        <div className={styles.login_bg}>
            <Form name="normal_login" className={styles.login_form} initialValues={{ remember: true }} onFinish={onFinish}  >
                <Form.Item name="username" label="账号" rules={[{ required: true, message: '请输入你的账号' }]}   >
                    <Input placeholder="请输入你的账号" />
                </Form.Item>
                <Form.Item name="password" label="密码" rules={[{ required: true, message: '请输入你的账号密码' }]}  >
                    <Input type="password" placeholder="请输入你的账号密码" />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"> 登 录 </Button>
                </Form.Item>
            </Form>
        </div>

    );
};

export default Login;