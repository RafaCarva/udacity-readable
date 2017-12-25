import React, { Component } from 'react'
//actions
import {inserirCategorias} from '../actions/actionCategorias'
//libs
import { Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
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

  let objetoResposta = fetch('http://localhost:3001/categories', 
    { headers: { 'Authorization': 'whatever-you-want' }})
    .then((response) => {
      if(response.ok) {
        //console.log('entrou no ok: ',response.json())
       // let temp = response.json();
       //let temp = response.data
       // return temp
       //por o resultado do fetch no store
       this.props.inserirCategorias(response.json());
      } else {
        console.log('erro', response.statusText)
      }
    })
//console.log(objetoResposta);
//console.log(objetoResposta.headers);

//por o resultado do fetch no store
//this.props.inserirCategorias(objetoResposta);



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