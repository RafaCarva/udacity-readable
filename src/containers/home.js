import React, {Component} from 'react';
//actions
import {inserirCategorias} from '../actions/actionCategorias';
import {inserirPosts} from '../actions/actionPosts'
//libs
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import serializeForm from 'form-serialize'
//api
//import API from '../utils/api'
//componentes
import LinksCategorias from '../componentes/linksCategorias';
import Posts from '../componentes/post';
import FormularioPostagem from '../componentes/formularioPostagem';

class Home extends Component {
  constructor () {
    super ();

    this.state = {
      //categorias:[],
    };
  }

  componentDidMount () {
    // pegar as categorias e gravar no store
    axios
      .get ('http://localhost:3001/categories', {
        headers: {Authorization: 'whatever-you-want'},
      })
      .then (response => {
        //console.log('array de categorias: ',response.data);
        this.props.inserirCategorias (response.data);
      })
      .catch (error => {
        console.log ('ERRO', error);
      });

    // pegar os posts
    axios
    .get ('http://localhost:3001/posts', {
      headers: {Authorization: 'whatever-you-want'},
    })
    .then (response => {
      //console.log('array de categorias: ',response.data);
      this.props.inserirPosts (response.data);
    })
    .catch (error => {
      console.log ('ERRO', error);
    });

  } //componentDidMount

  formularioPostagemSubmit = (e) =>{
    e.preventDefault();
    
    const valoresInputs = serializeForm(e.target,{hash:true})
    console.log("FORM",valoresInputs);


  }



  render () {
    const {categorias} = this.props;
    const {posts} = this.props;
    //console.log('12', props)
    
    return (
      <div>
        <h2>Categorias</h2>
        <LinksCategorias categorias={categorias} />
        <h2>Posts</h2>
        <Posts posts={posts} />
        <h2>Inserir Post</h2>
        <FormularioPostagem 
          categorias={categorias}
          formSubmit={this.formularioPostagemSubmit} 
        />

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    ...state.ReducerCategorias,
    ...state.ReducerPosts,
    ...state};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      inserirCategorias,
      inserirPosts
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps) (Home);
