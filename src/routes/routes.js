import React from 'react'
import {Switch, Route} from 'react-router-dom'
//páginas
import Home from '../containers/home'
import reactPage from '../containers/react'
import reduxPage from '../containers/redux'
import udacityPage from '../containers/udacity'



export default props =>(
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/react' component={reactPage} />
    <Route path='/redux' component={reduxPage} />
    <Route path='/udacity' component={udacityPage} />
  </Switch>
)