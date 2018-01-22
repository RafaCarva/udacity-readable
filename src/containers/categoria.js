import React, { Component } from 'react';
//componentes
import Posts from '../componentes/post';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {ordenarPosts} from '../utils/ordenarPosts'

class categoria extends Component {
  constructor(props) {
    console.log('categoria construtor')
    super(props);
  }

  render() {

    return (
      <div>
        <Link to="/"> Voltar</Link>
        <h1>{this.props.ReducerCategorias.categoriaAtual}</h1>
        <Posts posts={this.props.ReducerPosts.todosPosts.filter(item => item.category === this.props.ReducerCategorias.categoriaAtual)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
return{...state}
}

export default connect(mapStateToProps)(categoria);
