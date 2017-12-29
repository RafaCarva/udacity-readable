import React from 'react';
import axios from 'axios';
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

  return (
    <ul className="postLista">
      {posts.map ((link, key) => (
        <li key={key} className="postContainer">
          {/*<p>id:{link.id}</p>*/}
          titulo:{link.title}
          <br />
          category:{link.category}
          <br />
          <button onClick={() => excluirPost (link.id)}>deletar post</button>

        </li>
      ))}
    </ul>
  );
};
export default post;
