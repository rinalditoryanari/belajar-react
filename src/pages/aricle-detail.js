import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = () => {
  let { id } = useParams();
  return <div>ArticleDetail ID: {id} </div>;
};

export default ArticleDetail;
