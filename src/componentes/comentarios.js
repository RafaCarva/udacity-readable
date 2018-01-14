import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//import { Link } from 'react-router-dom'
import { inserirComentarios, limparComentarios, deletarComentario, alterarVotoComentario } from '../actions/actionComentarios'
import { bindActionCreators } from 'redux'

class comentarios extends Component {

  constructor(props) {
    super(props);

    this.state = {
      postId: this.props.id,
    }
  }

  componentWillMount() {
   
  }

  componentDidMount() {
 //Pegar todos os comentários da postagem = id a api.
    axios.get(`http://localhost:3001/posts/${this.state.postId}/comments`, {
        headers: { Authorization: 'whatever-you-want' },
      })
      .then(response => {
        console.log('response de pegar todos os comentários ->', response.data)

        //setar o objeto de comentários vindo da api no STORE
        this.props.inserirComentarios(response.data)

      }).catch(error => { console.log('ERRO sobre comentários', error); })

  }

  /**
   * Limpar o 'todosComentarios' da store
   */
  componentWillUnmount() {
    this.props.limparComentarios();
  }


  render() {

    const excluirComentario = (id) => {

     axios.delete('http://localhost:3001/comments/' + id, {
          headers: { Authorization: 'whatever-you-want' },
        })
        .then(response => {
          console.log("COMENTÁRIO id:", id, " deletado!");
         //chamar a action para deletar na store também
          this.props.deletarComentario(id);
        })
        .catch(error => {
          console.log('ERRO no delete do post', error);
        });

      

    }//excluirComentario

const votarComentario=(id,acao)=>{
  //gravar o score na api
  axios.post(`http://localhost:3001/comments/${id}`, {
    headers: {Authorization: 'whatever-you-want'},
    option: acao
  })
  .then(response => {
    console.log('resposta do voto no cometario', response.data)
    //alterar o score no store
    this.props.alterarVotoComentario(response.data)
  })
  .catch(error => {
    console.log('ERRO no alterarScore', error);
  });
}//votarComentario


    return (
      <div>
        <h3>Comentários</h3>
        <ul>
          {this.props.ReducerComentarios.todosComentarios.map((item, key) => (
            <li key={key}>
              Autor: {item.author}<br />
              Comentário: {item.body}<br />
              Score: {item.voteScore}
<br />
              <button onClick={() => votarComentario(item.id, "upVote")}>+</button>
              <button onClick={() => votarComentario(item.id, "downVote")}>-</button><br />
              <button onClick={() => excluirComentario(item.id)}>deletar comentário</button>
            </li>
          ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  { inserirComentarios, limparComentarios, deletarComentario,alterarVotoComentario }, dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(comentarios);

/*
:
author:"thingtwo"
body:"Hi there! I am a COMMENT."
deleted:false
id:"894tuq4ut84ut8v4t8wun89g"
parentDeleted:false
parentId:"8xf0y6ziyjabvozdd253nd"
timestamp:1468166872634
voteScore:6
*/