import React from 'react';
import {Switch, Route} from 'react-router-dom';
//páginas
import Home from '../containers/home';
import postDetalhado from '../componentes/postDetalhado';
import cat from '../containers/categoria';
import editarPost from '../containers/editarPost';
import pageNotFound from '../componentes/pageNotFound';

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:categoria" component={cat} />
    <Route exact path="/:categoria/:id" component={postDetalhado} />
    <Route exact path="/editarPost/" component={editarPost} />
    <Route exact path="/pagenotfound" component={pageNotFound} />    
  </Switch>
);