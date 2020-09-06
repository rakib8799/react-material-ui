import React, { useEffect, useContext } from 'react';
import Comments from '../Comments/Comments';
import { useParams } from 'react-router-dom';
import { CountContext } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px auto',
    width: '90%',
    '& > * + *': {
      marginTop: theme.spacing(0),
      fontSize: '1.5rem',
      background: '#1e5f74'
    },
  },
  title: {
    fontSize: '2rem',
    color: 'lightGray',
    background: '#1d2d50'
  }
}));

const DetailPage = () => {
  const {postId} = useParams();
  const [count,setCount] = useContext(CountContext);
  const classes = useStyles();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setCount(data))
  },[postId, setCount])

  return (
    <div className={classes.root}>
      <SnackbarContent className={classes.title} message={count.title} />
      <SnackbarContent message={count.body}/>
      <Comments></Comments>
    </div>
  );
};

export default DetailPage;