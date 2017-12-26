import React, { Component } from 'react'
//actions
import {inserirCategorias} from '../actions/actionCategorias'
//libs
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import axios from 'axios'
//api
//import API from '../utils/api'
//componentes
import LinksCategorias from '../componentes/linksCategorias'


class Home extends Component {

  constructor() {
    super();

    this.state = {
      categorias:[],
    }

  }

  /**
   * pegar as categorias e gravar no store
   */
  componentDidMount() {

  axios.get('http://localhost:3001/categories', 
  { headers: { 'Authorization': 'whatever-you-want' }})
  .then((response) => {
    console.log('dddddddd',response.data);
    this.props.inserirCategorias(response.data);

  })
.catch(error=>{
    this.setState({exibirLoading:false});
    console.log("ERRO");
    console.log(error);
})

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

function mapStateToProps(state) {
  return { ...state }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  inserirCategorias
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps) (Home);