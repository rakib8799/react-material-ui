import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  header: {
    background: '#cffffe',
    borderBottom: '1px solid #8fc0a9'
  },
  pos: {
    marginBottom: 10,
    fontSize: '1.2rem',
  },
  link: {
    textDecoration: 'none'
  }
});

  
const PostBtn = (props) => {
  const {btnValue} = props;
  const {id,title,body} = btnValue;
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.header}>
          <Typography variant="h5" component="h2">
            {title}
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {body}
        </Typography>
        <CardActions>
        <Link className={classes.link} to={`posts/${id}`}><Button color="primary" variant='contained'>Read more</Button></Link>
        </CardActions>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default PostBtn;