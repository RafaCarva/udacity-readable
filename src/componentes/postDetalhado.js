import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post'
import axios from 'axios';
import Comentarios from './comentarios';
import {Link,withRouter} from 'react-router-dom';
import { inserirPostDetalhado } from '../actions/actionPosts'
import {inserirComentarios}from '../actions/actionComentarios'
import { bindActionCreators } from 'redux'
import { PulseLoader } from 'halogenium';


class postDetalhado extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      autorComentario:'',
      msgComentario:'',


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
        parentId: this.state.id,
      })
      .then(response => {
        //gravar comentário no store
        console.log('COMETARIOS',response.data);
//this.props.inserirComentarios(response)

      })
      .catch(error => {
        console.log('ERRO ao cadastrar comentário', error);
      });


  // this.props.history.push(`/${this.state.posts.category}/${this.state.posts.id}`);
   
  }//gravar post editado

  render() {
    return (
      <div>
        {this.props.ReducerPosts.postSendoVisualizado
          ?
<div>
       <h1>post detalhado</h1>
       <Post posts={[this.props.ReducerPosts.postSendoVisualizado]} />
       <Comentarios id={this.state.id} /> 

       <form onSubmit={this.gravarComentario.bind(this)}>
          autor:<input type="text" onChange={this.alterouAutor.bind(this)} /><br />
          msg: <input type="text" onChange={this.alterouMsg.bind(this)} /><br />
          <button type="submit">Gravar Post</button>
        </form>

        </div>
:
<div>
<PulseLoader color="#26A65B" size="16px" margin="4px" />
  </div>
        }
       <Link to="/">Voltar</Link>
      </div>
    );
  }
}

function mapStateToProps(state) { return { ...state } }

const mapDispatchToProps = dispatch => bindActionCreators(
  {inserirPostDetalhado,
    inserirComentarios},dispatch
);
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(postDetalhado));


