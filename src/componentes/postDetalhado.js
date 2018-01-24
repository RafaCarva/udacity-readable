import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post'
import axios from 'axios';
import Comentarios from './comentarios';
import { Link, withRouter } from 'react-router-dom';
import { inserirPostDetalhado } from '../actions/actionPosts'
import { inserirComentarios, inserirNovoComentarios } from '../actions/actionComentarios'
import { bindActionCreators } from 'redux'
import { PulseLoader } from 'halogenium';

import PageNotFound from './pageNotFound'

class postDetalhado extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      autorComentario: '',
      msgComentario: '',
      exibirPost:true
    }
  }

  componentWillMount() {
   this.setState({ id: this.props.match.params.id });
  }

  componentDidMount() {
    // pegar o post
    axios.get(`http://localhost:3001/posts/${this.state.id}`, {
      headers: { Authorization: 'whatever-you-want' },
    })
      .then(response => {
        //por o post no store
        this.props.inserirPostDetalhado(response.data)
      })
      .catch(error => {this.props.history.push('/pagenotfound'); console.log('ERRO', error); });
  }

  alterouAutor(e) {
    this.setState({ autorComentario: e.target.value });
  }
  alterouMsg(e) {
    this.setState({ msgComentario: e.target.value });
  }

  gravarComentario(e) {
    e.preventDefault();

    //gravar o comentário novo na api
    axios.post('http://localhost:3001/comments', {
      headers: { Authorization: 'whatever-you-want' },

      id: Date.now(),
      timestamp: Date.now(),
      body: this.state.autorComentario,
      author: this.state.msgComentario,
      parentId: this.state.id
    })
      .then(response => {
        
        console.log('COMETARIOS', response.data);

        //gravar comentário no store
        this.props.inserirNovoComentarios(response.data)
        
        axios.get(`http://localhost:3001/posts/${this.state.id}`, {
          headers: { Authorization: 'whatever-you-want' },
        })
          .then(response => {
            //por o post no store
            this.props.inserirPostDetalhado(response.data)
          })
          .catch(
            error => { console.log('ERRO no get de graavar comentário', error);
            //this.props.history.push('/pagenotfound')
             }
          );

      })
      .catch(error => {
        console.log('ERRO ao cadastrar comentário', error);
      });
  }//gravar post editado

  render() {

    const { postSendoVisualizado } = this.props.ReducerPosts;

/*    if (Object.keys(postSendoVisualizado).length === 0){
     console.log('------------>',this.props)
     return null
    }
    */
 
    return (
      <div>
        {(this.props.ReducerComentarios.todosComentarios && Object.keys(postSendoVisualizado).length > 0)
          ?
          <div>
            <h1>post detalhado</h1>
            <Post posts={[this.props.ReducerPosts.postSendoVisualizado]} />
            <Comentarios id={this.state.id} />
            <form onSubmit={this.gravarComentario.bind(this)}>
              autor:<input type="text" onChange={this.alterouAutor.bind(this)} /><br />
              msg: <input type="text" onChange={this.alterouMsg.bind(this)} /><br />
              <button type="submit">Gravar Comentário</button>
            </form>
            <Link to="/">Voltar</Link>
          </div>  
          :
          <PageNotFound />   
        }
      </div>
    );
  }
}

function mapStateToProps(state) { return { ...state } }

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    inserirPostDetalhado,
    inserirComentarios,
    inserirNovoComentarios
  }, dispatch
);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(postDetalhado));