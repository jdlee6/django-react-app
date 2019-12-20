import React from 'react';
import { Form, Icon, Input, Button, Spin } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function LoginForm(props) {
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  return (
    <div>
      {errorMessage}
      {props.loading ? (
        <Spin indicator={antIcon} />
      ) : (
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: '10px' }}
            >
              Login
            </Button>
            Or
            <NavLink
              style={{ marginRight: '10px', paddingLeft: '10px' }}
              to="/signup/"
            >
              Sign up
            </NavLink>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}

const WrappedLoginForm = Form.create()(LoginForm);

function mapStateToProps(state) {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
}

export default connect(mapStateToProps)(WrappedLoginForm);
