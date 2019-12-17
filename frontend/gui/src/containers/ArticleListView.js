import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Articles from '../components/Articles';

export default function ArticleListView() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/').then(res => setArticles(res.data));
  }, []);

  return <Articles data={articles} />;
}
