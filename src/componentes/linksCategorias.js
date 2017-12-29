import React from 'react'
import {Link} from 'react-router-dom'

const linksCategorias = props => {

  //de todo o props, cria uma const 'categorias' com os dados do 'categorias' do props.
  //console.log(props);
  const {categorias} = props
  return(
    <ul>      
      {categorias.categories ? 
        categorias.categories.map((link,key)=>(<li key={key}><Link to={`/${link.path}`} key={key}>{link.name}</Link></li>))
        :""}
      </ul>
  )
}
export default linksCategorias

