import React from 'react';
import axios from 'axios';

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
    <ul>
      {posts.map ((link, key) => (
        <li key={key}>
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
