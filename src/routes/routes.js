import React from 'react';
import {Switch, Route} from 'react-router-dom';
//páginas
import Home from '../containers/home';
import reactPage from '../containers/react';
import reduxPage from '../containers/redux';
import udacityPage from '../containers/udacity';
import postDetalhado from '../componentes/postDetalhado';

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/react" component={reactPage} />
    <Route path="/react/:id" component={postDetalhado} />

    <Route exact path="/redux" component={reduxPage} />
    <Route path="/redux/:id" component={postDetalhado} />

    <Route exact path="/udacity" component={udacityPage} />
    <Route path="/udacity/:id" component={postDetalhado} />

  </Switch>
);
