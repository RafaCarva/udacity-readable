import React from 'react'
import {Switch, Route} from 'react-router-dom'
//páginas
import Home from '../containers/home'


export default props =>(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/Home' component={Home} />
  </Switch>
)