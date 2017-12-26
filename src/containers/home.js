import React, {Component} from 'react';
//actions
import {inserirCategorias} from '../actions/actionCategorias';
import {inserirPosts} from '../actions/actionPosts'
//libs
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
//api
//import API from '../utils/api'
//componentes
import LinksCategorias from '../componentes/linksCategorias';
import Posts from '../componentes/post'

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

  render () {
    const {categorias} = this.props;
    const {posts} = this.props;
    //console.log('12', props)
    
    return (
      <div>
        <LinksCategorias categorias={categorias} />
        <h1>home</h1>
        <Posts posts={posts} />
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
