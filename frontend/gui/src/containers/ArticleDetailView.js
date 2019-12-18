import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';
import CustomForm from '../components/Form';

export default function ArticleDetailView(props) {
  const [article, setArticle] = useState([]);
  const articleID = props.match.params.articleID;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(res => setArticle(res.data));
  }, [articleID]);

  const handleDelete = e => {
    e.preventDefault();
    axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
  };

  return (
    <div>
      <Card title={article.title}>
        <p>{article.content}</p>
      </Card>
      <br />
      <CustomForm requestType="put" articleID={articleID} btnText="Update" />
      <form onSubmit={handleDelete}>
        <Button type="danger" htmlType="submit">
          Delete
        </Button>
      </form>
    </div>
  );
}
