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

class postDetalhado extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      autorComentario: '',
      msgComentario: '',
      //postSendoVisualizado:''
    }
  }

  componentWillMount() {
    this.setState({ id: this.props.match.params.id });
    //this.setState({ postSendoVisualizado: this.props.ReducerPosts.postSendoVisualizado});
    //console.log('-------------->',this.state.postSendoVisualizado)
  }

  componentDidMount() {
    // pegar o post
    axios.get(`http://localhost:3001/posts/${this.state.id}`, {
      headers: { Authorization: 'whatever-you-want' },
    })
      .then(response => {
        //por o post no store
        this.props.inserirPostDetalhado(response.data)

        //por o post no state
        //this.setState({postSendoVisualizado:response.data});
      })
      .catch(error => { console.log('ERRO', error); });
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
        //this.setState({ postSendoVisualizado: response.data });

        //TODO inserir o post no reducer: ReducerPosts > postSendoVisualizado

        axios.get(`http://localhost:3001/posts/${this.state.id}`, {
          headers: { Authorization: 'whatever-you-want' },
        })
          .then(response => {
            //por o post no store
            this.props.inserirPostDetalhado(response.data)
          })
          .catch(error => { console.log('ERRO', error); });

      })
      .catch(error => {
        console.log('ERRO ao cadastrar comentário', error);
      });
  }//gravar post editado

  render() {
    //console.log('-------------->',this.state.postSendoVisualizado)
    return (
      <div>
        {this.props.ReducerComentarios.todosComentarios
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
          <div>
            <PulseLoader color="#26A65B" size="16px" margin="4px" />
          </div>
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


