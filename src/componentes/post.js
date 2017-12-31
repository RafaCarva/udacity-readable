import React, { Component } from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deletarPosts } from '../actions/actionPosts'

import './post.css'

class post extends Component {

  render() {
    const { posts } = this.props;

    const excluirPost = id => {

      axios
        .delete('http://localhost:3001/posts/' + id, {
          headers: {
            Authorization: 'whatever-you-want'
          },
        })
        .then(response => {
          console.log("post id:", id, " deletado!");
          //deletarPosts é o action que foi importado
          //e associado ao dispatch
          this.props.deletarPosts(id);
        })
        .catch(error => {
          console.log('ERRO no delete do post', error);
        });
    }

    return (
      <ul className="postLista">
        {posts.map((link, key) => (
          <li key={key} className="postContainer">
            {/*<p>id:{link.id}</p>*/}
            titulo:{link.title}
            <br />
            category:{link.category}
            <br />
            <button onClick={() => excluirPost(link.id)}>deletar post</button>

          </li>
        ))}
      </ul>
    )//return
  }//render


}//class

function mapStateToProps(state) {
  return {
    ...state.ReducerPosts,
    ...state,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deletarPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(post);
