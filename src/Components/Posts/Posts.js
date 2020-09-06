import React, { useContext, useEffect } from 'react';
import { CountContext } from '../../App';
import PostBtn from '../PostBtn/PostBtn';

const Posts = () => {
  const [count,setCount] = useContext(CountContext);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setCount(data))
  },[setCount])

  return (
    <div>
      {
        count.map(cn => <PostBtn key={cn.id} btnValue={cn}></PostBtn>)
      }
    </div>
  );
};

export default Posts;