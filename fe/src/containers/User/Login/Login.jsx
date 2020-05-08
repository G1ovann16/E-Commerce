import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import './Login.scss';
import axios from 'axios';
import { API_URL } from '../../../api-config';
import { useHistory } from 'react-router-dom';
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
        axios.post(API_URL + '/users/login', user)
            .then(res => {//como subscribe en angular
                localStorage.setItem('authToken',res.data.token)//guardamos el token en localstorage
                notification.success({ message: 'Usuario conectado éxito' });
                history.push('/')//this.router.navigate(['/login]) en angular
            })
            .catch(console.error)
    };
    return (
        <div className="loginContainer">
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
                        Conectarse
          </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Login;