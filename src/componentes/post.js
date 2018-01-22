import React from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { deletarPosts,
   actionAlterarScore, 
   inserirPostDetalhado, 
   listarMaiorScore, 
   listarMenorScore, 
   listarMaisNova, 
   listarMaisVelha,
   actionSetarOrdenarPost } from '../actions/actionPosts'
import { actionEditarPost } from '../actions/actionEditarPost'
import './post.css'

const post = props => {

  let { posts } = props;

  const excluirPost = async (id) => {

    let chamarApi = axios
      .delete('http://localhost:3001/posts/' + id, {
        headers: { Authorization: 'whatever-you-want' },
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

  const alterarScore = (id, acao) => {
    axios
      .post('http://localhost:3001/posts/' + id, {
        headers: {
          Authorization: 'whatever-you-want'
        },
        option: acao
      })
      .then(response => {
        //alterar o score no store
        props.inserirPostDetalhado(response.data);
        props.actionAlterarScore(response.data)

  

      })
      .catch(error => {
        console.log('ERRO no alterarScore', error);
      });
  }//alterarScore

  const editarPost = (id) => {
    props.actionEditarPost(id);
    props.history.push('/editarPost');
  }//editarPost

/*
setarReducerListagem(acao){
  props.actionSetarOrdenarPost(acao);
  return true;
}
*/

  const filtrarPosts=(acao)=>{
    //1° setar o valor no store
    props.actionSetarOrdenarPost(acao);
  
    
    //2º chamar uma action dependendo do valor que foi setado no score
   /* props.ReducerPosts.ordenarPost === "menor-score" ? props.listarMenorScore() :
    props.ReducerPosts.ordenarPost === "maior-score" ? props.listarMaiorScore() :
    props.ReducerPosts.ordenarPost === "mais-nova" ? props.listarMaisNova() :
    props.ReducerPosts.ordenarPost === "mais-velha" ? props.listarMaisVelha():
    console.log('***ERRO: ReducerPosts.ordenarPost não tem um valor listavel.')
  */}



  return (
    <div>
      Filtrar por
      <button onClick={() => filtrarPosts("menor-score")}>menor score</button>
      <button onClick={() => filtrarPosts("maior-score")}>maior score</button>
      <button onClick={() => filtrarPosts("mais-nova")}>mais nova</button>
      <button onClick={() => filtrarPosts("mais-velha")}>mais velha</button><br />
  

      <ul className="postLista">
        {posts.map((link, key) => (

          <li key={key} className="postContainer">
            Titulo:<Link to={`/${link.category}/${link.id}`} >{link.title}</Link><br />
            Autor:{link.author}<br />
            Categoria:{link.category}<br />
            Mensagem:{link.body}<br />
            Nº de comentários:{link.commentCount}<br />
            score:{link.voteScore}
            <button onClick={() => alterarScore(link.id, "upVote")}>+</button>
            <button onClick={() => alterarScore(link.id, "downVote")}>-</button><br />
            <button onClick={() => excluirPost(link.id)}>deletar post</button><br />
            <button onClick={() => editarPost(link.id)}>editar post</button>
          </li>
        ))}
      </ul>

    </div>
  );//return
};

function mapStateToProps(state) {
let posts;
console.log('***************',posts)

if (state.ReducerPosts.todosPosts.length){

console.log('tem algum post')
if(state.ReducerPosts.ordenarPost === 'maior-score'){
  
  this.posts = [
    state.ReducerPosts.todosPosts.sort((a, b) => {
      if (a.voteScore < b.voteScore) {return 1;}
      if (a.voteScore > b.voteScore) {return -1;}
      return 0;})
  ]
}//if

else if(state.ReducerPosts.ordenarPost === 'menor-score'){
  this.posts = [
    state.ReducerPosts.todosPosts.sort((a, b) => {
      if (a.voteScore > b.voteScore) {return 1;}
      if (a.voteScore < b.voteScore) {return -1;}
      return 0;})
  ]
}//if 

else if(state.ReducerPosts.ordenarPost === 'mais-nova'){
  this.posts = [
    state.ReducerPosts.todosPosts.sort((a, b) => {
      if (a.timestamp < b.timestamp) {return 1;}
      if (a.timestamp > b.timestamp) {return -1;}
      return 0;})
  ]
}//if

else if(state.ReducerPosts.ordenarPost === 'mais-velha'){
  this.posts = [
    state.ReducerPosts.todosPosts.sort((a, b) => {
      if (a.timestamp > b.timestamp) {return 1;}
      if (a.timestamp < b.timestamp) {return -1;}
      return 0;})
  ]
}//if

console.log('antes de retornar ',this.posts)
let temp={posts}
return {temp }
}else
{
  console.log('não tem post')
return { ...state }
}



}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deletarPosts,
    actionAlterarScore,
    actionEditarPost,
    inserirPostDetalhado,
    listarMaiorScore,
    listarMenorScore,
    listarMaisNova,
    listarMaisVelha,
    actionSetarOrdenarPost
  },
  dispatch
);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(post));