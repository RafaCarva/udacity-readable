import React, { Component } from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deletarPosts } from '../actions/actionPosts'

import './post.css'

const post = props => {
  const {posts} = props;

  const excluirPost = id => {

    axios
    .delete ('http://localhost:3001/posts/'+id, {
      headers: {
        Authorization: 'whatever-you-want'
      },
    })
    .then (response => {
      console.log("post id:",id," deletado!");
    })
    .catch (error => {
      console.log ('ERRO no delete do post', error);
    });

  }

  const alterarScore = async(id,acao) =>{
    let a =  axios
    .post ('http://localhost:3001/posts/'+id, {
      headers: {
        Authorization: 'whatever-you-want'
      },
        option:acao
    })
    .then (response => {
      console.log("alterarScore -> response ",response);
      //agora que o score foi alterado na api, altere ele aqui no store

      return response

    })
    .catch (error => {
      console.log ('ERRO no alterarScore', error);
    });

    await a;

  }//alterarScore


  


  return (
    <ul className="postLista">
      {posts.map ((link, key) => (
        <li key={key} className="postContainer">
          {/*<p>id:{link.id}</p>*/}
          titulo:{link.title}
          <br />
          category:{link.category}
          <br />
          score:{link.voteScore}
          <button onClick={() => alterarScore (link.id,"upVote")}>+</button>
          <button onClick={() => alterarScore (link.id,"downVote")}>-</button>

          <br />
          <button onClick={() => excluirPost (link.id)}>deletar post</button>

        </li>
      ))}
    </ul>
  );
};
export default post;
