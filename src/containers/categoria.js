import React, { Component, Fragment } from 'react';
//componentes
import Posts from '../componentes/post';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import PageNotFound from '../componentes/pageNotFound';

class categoria extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log('o que vai ser enviado é:', this.state.postsDaCategoria)
    return (
      <div>
        <h1>{this.props.ReducerCategorias.categoriaAtual}</h1>
        {this.props.posts ?
          <Fragment>
            <Link to="/"> Voltar</Link>
            <Posts posts={this.props.posts.filter(item => item.category === this.props.ReducerCategorias.categoriaAtual)} />
          </Fragment> :
          <PageNotFound />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  let posts;

  if (state.ReducerPosts.todosPosts.length) {

    console.log('TEM POST', state.ReducerPosts.todosPosts)
    if (state.ReducerPosts.ordenarPost === 'maior-score') {

      this.posts =
        state.ReducerPosts.todosPosts.sort((a, b) => {
          if (a.voteScore < b.voteScore) { return 1; }
          if (a.voteScore > b.voteScore) { return -1; }
          return 0;
        })

    }//if

    else if (state.ReducerPosts.ordenarPost === 'menor-score') {
      this.posts =
        state.ReducerPosts.todosPosts.sort((a, b) => {
          if (a.voteScore > b.voteScore) { return 1; }
          if (a.voteScore < b.voteScore) { return -1; }
          return 0;
        })

    }//if 

    else if (state.ReducerPosts.ordenarPost === 'mais-nova') {
      this.posts =
        state.ReducerPosts.todosPosts.sort((a, b) => {
          if (a.timestamp < b.timestamp) { return 1; }
          if (a.timestamp > b.timestamp) { return -1; }
          return 0;
        })

    }//if

    else if (state.ReducerPosts.ordenarPost === 'mais-velha') {
      this.posts =
        state.ReducerPosts.todosPosts.sort((a, b) => {
          if (a.timestamp > b.timestamp) { return 1; }
          if (a.timestamp < b.timestamp) { return -1; }
          return 0;
        })

    }//if

    //console.log('antes de retornar ',this.posts)
    let posts = this.posts
    //console.log('posts = ',this.posts)
    return { ...state, posts }
  } else {
    console.log('não tem post')
    return { ...state }
  }
}

export default connect(mapStateToProps)(categoria);