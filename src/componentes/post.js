import React from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { deletarPosts, actionAlterarScore, inserirPostDetalhado, listarMaiorScore, listarMenorScore, listarMaisNova, listarMaisVelha } from '../actions/actionPosts'
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

  const filtroDecScore = () => {
    props.listarMaiorScore();
  }
  const filtroCreScore = () => {
    props.listarMenorScore();
  }
  const filtroMaisNova = () => {
    props.listarMaisNova();
  }
  const filtroMaisVelha = () => {
    props.listarMaisVelha();
  }

  return (
    <div>
      Filtrar por
      <button onClick={() => filtroDecScore()}>-score</button>
      <button onClick={() => filtroCreScore()}>+score</button>
      <button onClick={() => filtroMaisNova()}>+nova</button>
      <button onClick={() => filtroMaisVelha()}>+velha</button>

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
  return { ...state }
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
    listarMaisVelha
  },
  dispatch
);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(post));