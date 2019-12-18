import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from '../components/Articles';
import CustomForm from '../components/Form';

export default function ArticleListView() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/').then(res => setArticles(res.data));
  }, []);

  return (
    <div>
      <Articles data={articles} />
      <br />
      <h2>Create an article</h2>
      <CustomForm requestType="post" articleID={null} btnText="Create" />
    </div>
  );
}
