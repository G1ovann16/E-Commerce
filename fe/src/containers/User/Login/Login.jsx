import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import './Login.scss' 
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions/users';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const Login = () => {
    const history = useHistory();//props.history
    const onFinish = user => {
      login(user).then(()=>{
          window.setTimeout(() => {
          history.push('/shop')}, 1000 )
        notification.success({
            message: 'Usuario conectado éxito'
        });
        
    })
       .catch(error=>{
            console.error(error)
            notification.error({
              message: 'Credenciales inválidas',
              description:'Email y/o contraseñas no válidas'
          })
        })
      };
    return (
        <div className="login container">
            <Form
                className="loginForm"
                {...layout}
                // name="basic"
                // initialValues={{email:'yo@yo.yo', password: '12345' }}
                onFinish={onFinish}
                onFinishFailed={console.error} >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'El email es requerido' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'La contraseña es requerida' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
          </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Login;