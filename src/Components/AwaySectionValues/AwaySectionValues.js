import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import faker from 'faker';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '10ch',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    color: '#555',
  },
}));

const AwaySectionValues = (props) => {
  const { value } = props;
  const { name, email, body } = value;
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar" src={faker.image.avatar()} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography component={'span'} variant={'body2'} className={classes.inline}>{email}</Typography>
              {body}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default AwaySectionValues;