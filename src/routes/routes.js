import React from 'react';
import {Switch, Route} from 'react-router-dom';
//páginas
import Home from '../containers/home';
import postDetalhado from '../componentes/postDetalhado';
import categoria from '../containers/categoria';
import editarPost from '../containers/editarPost';

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/editarPost/" component={editarPost} />
    <Route exact path="/:categoria" component={categoria} />
    <Route exact path="/:categoria/:id" component={postDetalhado} />
    
  </Switch>
);
