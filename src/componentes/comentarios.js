import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//import { Link } from 'react-router-dom'
import {
  inserirComentarios,
  limparComentarios,
  deletarComentario,
  alterarVotoComentario,
  inserirComentarioAlterado
} from '../actions/actionComentarios'
import {inserirPostDetalhado} from '../actions/actionPosts'
import { bindActionCreators } from 'redux'

class comentarios extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: 0,
      mostrarEditarComentario: false,
      comentarioEditado: '',
      comentarioEditadoId: '',
      todosComentariosOrdenados:this.props.ReducerComentarios.todosComentarios.sort((a, b) => {
        if (a.voteScore < b.voteScore) {return 1;}
        if (a.voteScore > b.voteScore) {return -1;}
        return 0;})
    }
  }

  componentWillMount = () => {
    this.setState({postId: this.props.id})
  }

  componentDidMount() {
    //Pegar todos os comentários da postagem = id a api.
    axios.get(`http://localhost:3001/posts/${this.state.postId}/comments`, {
      headers: { Authorization: 'whatever-you-want' },
    })
      .then(response => {
        console.log('response de pegar todos os comentários ->', response.data)
        
        //ordenar os comentários
        let comentariosOrdenados = response.data.sort((a, b) => {
          if (a.voteScore < b.voteScore) {return 1;}
          if (a.voteScore > b.voteScore) {return -1;}
          return 0;})

        //setar o objeto de comentários vindo da api no STORE
        this.props.inserirComentarios(comentariosOrdenados)

        this.setState({todosComentariosOrdenados:comentariosOrdenados})

      }).catch(error => { console.log('ERRO sobre comentários', error); })
  }
  /**
   * Limpar o 'todosComentarios' da store
   */
  componentWillUnmount() {
    this.props.limparComentarios();
  }

  alterouComentario(e) {
    this.setState({ comentarioEditado: e.target.value });
  }

  gravarComentarioAlterado(e) {
    console.log('o comentário editado é: ',this.state.comentarioEditado)
    e.preventDefault();
    axios
      .put(`http://localhost:3001/comments/${this.state.comentarioEditadoId}`, {
        headers: { Authorization: 'whatever-you-want' },
        timestamp: Date.now(),
        body: this.state.comentarioEditado
      })
      .then(response => {
        this.props.inserirComentarioAlterado(response.data)
        //limpar o state
        this.setState({ mostrarEditarComentario: false,  comentarioEditado: '', comentarioEditadoId: ''});
      })
      .catch(error => {
        console.log('ERRO', error);
      });
  }//gravarComentarioAlterado

  render() {
    const excluirComentario = (id) => {

      axios.delete('http://localhost:3001/comments/' + id, {
        headers: { Authorization: 'whatever-you-want' },
      })
        .then(response => {
          console.log("COMENTÁRIO id:", id, " deletado!");
          //chamar a action para deletar na store também
          this.props.deletarComentario(id);

          //depois de deletar o comentário, repopular o store com o post a ser dettalhado
          axios.get(`http://localhost:3001/posts/${this.state.postId}`, {
            headers: { Authorization: 'whatever-you-want' },
          })
            .then(response => {
              //por o post no store
              this.props.inserirPostDetalhado(response.data)
            })
            .catch(error => { console.log('ERRO', error); });
        })
        .catch(error => {
          console.log('ERRO no delete do post', error);
        });
    }//excluirComentario

    const votarComentario = (id, acao) => {
      //gravar o score na api
      axios.post(`http://localhost:3001/comments/${id}`, {
        headers: { Authorization: 'whatever-you-want' },
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

    const editarComentario = (id) => {
      console.log('id do comentário:',id)
      console.log('comentário editado id:',this.state.comentarioEditadoId)
      //if(this.state.comentarioEditadoId === id){
      this.setState({ [`mostrarEditarComentario${id}`]: !this.state[`mostrarEditarComentario${id}`] });
      this.setState({ comentarioEditadoId: id });
      //}
    }

    return (
      <div>
        {this.props.ReducerComentarios.todosComentarios.length
          ?
          <div>
            <h3>Comentários</h3>
            <ul>
              {this.props.ReducerComentarios.todosComentarios.map((item, key) => (
                <li key={key}>
                  Autor: {item.author}<br />
                  Comentário: {item.body}<br />
                  Score: {item.voteScore}
                  <button onClick={() => votarComentario(item.id, "upVote")}>+</button>
                  <button onClick={() => votarComentario(item.id, "downVote")}>-</button><br />
                  <button onClick={() => editarComentario(item.id)}>editar comentário</button><br />
                  <button onClick={() => excluirComentario(item.id)}>deletar comentário</button>
                  <span>
                    {this.state[`mostrarEditarComentario${item.id}`]
                      ?
                      <span>
                        <form onSubmit={this.gravarComentarioAlterado.bind(this)}>
                          novo comentário:<input type='text' value={this.state.comentarioEditado} onChange={this.alterouComentario.bind(this)} />
                          <button type='submit'>salvar</button>
                        </form>
                      </span>
                      :
                      <span>
                      </span>
                    }
                  </span>
                </li>
              ))
              }
            </ul>
          </div>
          :
          <div>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  { inserirComentarios, limparComentarios, deletarComentario, alterarVotoComentario, inserirComentarioAlterado,inserirPostDetalhado }, dispatch
);
export default connect(mapStateToProps, mapDispatchToProps)(comentarios);