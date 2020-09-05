import React from 'react';
import Posts from '../Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import NotFound from '../NotFound/NotFound';
import DetailPage from '../DetailPage/DetailPage';

const Home = () => {
  return (
    
      <Router>
        <Switch>
          <Route exact path='/'>
            <Posts></Posts>
          </Route>
          <Route path='/posts/:postId'>
            <DetailPage></DetailPage>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
};

export default Home;