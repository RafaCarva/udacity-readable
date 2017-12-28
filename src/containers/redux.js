import React, {Component} from 'react';
//componentes
import Posts from '../componentes/post';
//import LinksCategorias from '../componentes/linksCategorias'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class redux extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    const {posts} = this.props;
    const seletorDePosts = posts.filter (item => item.category === 'redux');

    console.log (seletorDePosts);

    return (
      <div>
        <Link to="/"> Voltar</Link>
        <h1>redux</h1>
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

export default connect (mapStateToProps) (redux);
