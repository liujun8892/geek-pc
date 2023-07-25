import React, { Component } from 'react';
import { Card, Button, Checkbox, Form, Input } from 'antd';
import './index.scss';
import Logo from '../../assets/logo.png';
import request from '../../utils/request';

export default class index extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-card">
          <img src={Logo} className="login-logo" alt="极客园" />
          <Form
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{
              mobile: '13911111111',
              code: '246810',
              agree: true,
            }}
            autoComplete="off"
            size="large"
            className="login-form"
            onFinish={this.onFinish}
          >
            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: '请输入手机号!' },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: '手机号格式错误',
                },
              ]}
            >
              <Input placeholder="请输入手机号" autoComplete="off" />
            </Form.Item>

            <Form.Item
              name="code"
              rules={[
                { required: true, message: '请输入验证码!' },
                {
                  pattern: /^\d{6}$/,
                  message: '验证码格式错误',
                },
              ]}
            >
              <Input placeholder="请输入验证码" autoComplete="off" />
            </Form.Item>

            <Form.Item
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator(rule, value) {
                    if (value) return Promise.resolve();
                    return Promise.reject(new Error('请阅读并同意用户协议'));
                  },
                },
              ]}
            >
              <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
  onFinish = async ({ mobile, code }) => {
    const res = await request({
      method: 'post',
      url: '/authorizations',
      data: {
        mobile,
        code,
      },
    });
    console.log(res);
  };
}
