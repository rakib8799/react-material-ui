import React, {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AwaySectionValues from '../AwaySectionValues/AwaySectionValues';

const Comments = () => {
  const {postId} = useParams();
  const [count,setCount] = useState([]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => res.json())
    .then(data => setCount(data))
  },[postId])

  return (
    <div>
      {
        count.map(cn=>
        <AwaySectionValues key={cn.id} value={cn}></AwaySectionValues>)
      }      
    </div>
  );
};

export default Comments;