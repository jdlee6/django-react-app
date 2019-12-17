import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';

export default function ArticleDetailView(props) {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const articleID = props.match.params.articleID;
    axios
      .get(`http://127.0.0.1:8000/api/${articleID}`)
      .then(res => setArticle(res.data));
  }, []);

  return (
    <Card title={article.title}>
      <p>{article.content}</p>
    </Card>
  );
}
