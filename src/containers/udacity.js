import React, { Component } from 'react';
//componentes
import Posts from '../componentes/post';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class udacity extends Component {
   
  constructor(props){
      super(props);
   }

   render () {
    const {posts} = this.props;
    const seletorDePosts = posts.filter (item => item.category === 'udacity');

    console.log (seletorDePosts);

    return (
      <div>
        <Link to="/"> Voltar</Link>
        <h1>udacity</h1>
        <Posts posts={seletorDePosts} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    ...state.ReducerCategorias,
    ...state.ReducerPosts,
    ...state,
  };
}

export default connect (mapStateToProps) (udacity);


