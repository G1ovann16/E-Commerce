import React from 'react'
import { Form, Input, Button, notification } from 'antd';
import './Register.scss';
import { API_URL } from '../../../api-config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const Register = () => {
    const history = useHistory();//props.history
    const onFinish = user => {
        axios.post(API_URL + '/users/signup', user)
            .then(() => {//como subscribe en angular
                notification.success({ message: 'Usuario creado con éxito' });
                history.push('/login')//this.router.navigate(['/login]) en angular
            })
            .catch(console.error)
    };
    return (
        <div className="registerContainer">
            <Form
                className="registerForm"
                {...layout}
                onFinish={onFinish}
                onFinishFailed={console.error} >
                <Form.Item
                    label="Nombre"
                    name="name"
                >
                    <Input />
                </Form.Item>
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
                      REGISTER AN ACCOUNT
          </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Register;