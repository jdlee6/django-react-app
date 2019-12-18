import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

export default function CustomForm(props) {
  const handleSubmit = (e, requestType, articleID) => {
    const title = e.target.elements.title.value;
    const content = e.target.elements.content.value;

    switch (requestType) {
      case 'post':
        return axios
          .post('http://127.0.0.1:8000/api/', {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      case 'put':
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            content: content
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
    }
  };

  // now we need to define onSubmit as an arrow function based on the event
  // the requestType & articleID will be passed as props
  return (
    <div>
      <Form onSubmit={e => handleSubmit(e, props.requestType, props.articleID)}>
        <Form.Item label="Title">
          <Input name="title" placeholder="Type in title..." />
        </Form.Item>
        <Form.Item label="Content">
          <Input name="content" placeholder="Type in content..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {props.btnText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
