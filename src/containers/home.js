import React, { Component } from 'react'
//API
import { Link } from 'react-router-dom'

//componentes
import LinksCategorias from '../componentes/linksCategorias'


class Home extends Component {

  constructor() {
    super();

    this.state = {
      categorias:[]
    }

  }

  /**
   * pegar as categorias
   */
  componentDidMount() {

  }



  render() {
    return (
      <div>
      <LinksCategorias />

      <h1>home</h1>
      </div>
    )




  }
}
export default Home;