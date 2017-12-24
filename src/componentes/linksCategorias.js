import React from 'react'
import {Link} from 'react-router-dom'

const linksCategorias = props => {
  return(
    <ul>
      <li><Link to="/react">react</Link></li>
      <li><Link to="/redux">redux</Link></li>
      <li><Link to="/udacity">udacity</Link></li>
      </ul>
  )
}
export default linksCategorias

