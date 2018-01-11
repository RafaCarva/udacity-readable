import React, { Component } from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletarPosts, actionAlterarScore } from '../actions/actionPosts'

import './post.css'

const post = props => {
  const { posts } = props;

  const excluirPost = async (id) => {

    let chamarApi = axios
      .delete('http://localhost:3001/posts/' + id, {
        headers: {
          Authorization: 'whatever-you-want'
        },
      })
      .then(response => {
        //console.log("post id:",id," deletado!");
        return response
      })
      .catch(error => {
        console.log('ERRO no delete do post', error);
      });

    //chamar a action
    props.deletarPosts(await chamarApi);

  }//excluirPost

  const alterarScore = async (id, acao) => {
    let chamarApi = axios
      .post('http://localhost:3001/posts/' + id, {
        headers: {
          Authorization: 'whatever-you-want'
        },
        option: acao
      })
      .then(response => {
        //console.log("alterarScore -> response ",response);
        //agora que o score foi alterado na api, altere ele aqui no store
        return response

      })
      .catch(error => {
        console.log('ERRO no alterarScore', error);
      });

    //chamar a action
    props.actionAlterarScore(await chamarApi);

  }//alterarScore



  return (
    <ul className="postLista">
      {posts.map((link, key) => (
        <li key={key} className="postContainer">
          {/*<p>id:{link.id}</p>*/}
          Titulo:<Link to={`/${link.category}/${link.id}`} >{link.title}</Link>
          <br />
          Categoria:{link.category}
          <br />
          Mensagem:{link.body}
          <br />
          score:{link.voteScore}
          <button onClick={() => alterarScore(link.id, "upVote")}>+</button>
          <button onClick={() => alterarScore(link.id, "downVote")}>-</button>
          <br />
          <button onClick={() => excluirPost(link.id)}>deletar post</button>

        </li>
      ))}
    </ul>
  );
};

function mapStateToProps(state) {
  return { ...state }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deletarPosts,
    actionAlterarScore,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(post);
