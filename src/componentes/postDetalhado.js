import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './post'
import axios from 'axios';
import Comentarios from './comentarios';
import {Link,withRouter} from 'react-router-dom';
import { inserirPostDetalhado } from '../actions/actionPosts'
import { bindActionCreators } from 'redux'

class postDetalhado extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      //posts: [],
      autorComentario:'',
      msgComentario:'',
      teste:''

    }
  }

  componentWillMount() {
    this.setState({ id: this.props.match.params.id });
  }

  componentDidMount() {
    // pegar o post
    axios
      .get(`http://localhost:3001/posts/${this.state.id}`, {
        headers: { Authorization: 'whatever-you-want' },
      })
      .then(response => {
        //por o post no state
        //this.setState({ posts: response.data });

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
    axios
      .post('http://localhost:3001/comments', {
        headers: { Authorization: 'whatever-you-want' },

        id: Date.now(),
        timestamp: Date.now(),
        body: this.state.autorComentario,
        author: this.state.msgComentario,
        parentId: this.state.id,
      })
      .then(response => {

        //limpar o state, chamando o actionLimparPost
        //console.log('eeeeee',response.data)
        //this.props.actionLimparEditarPost();
        //this.setState({teste:'dddddddddd'})
       //console.log('***********************',response.data)
        //props.history.push('/editarPost');
        //this.props.history.push(`/${this.state.posts.category}/${this.state.posts.id}`);
      })
      .catch(error => {
        console.log('ERRO ao cadastrar comentário', error);
      });


  // this.props.history.push(`/${this.state.posts.category}/${this.state.posts.id}`);
   
  }//gravar post editado

  render() {
    return (
      <div>

       <h1>post detalhado</h1>
     {/*  <Post posts={[this.state.posts]} /> */}

       <Post posts={[this.props.ReducerPosts.postSendoVisualizado]} />
       <Comentarios id={this.state.id} /> 

       <form onSubmit={this.gravarComentario.bind(this)}>
          autor:<input type="text" onChange={this.alterouAutor.bind(this)} /><br />
          msg: <input type="text" onChange={this.alterouMsg.bind(this)} /><br />
          <button type="submit">Gravar Post</button>
        </form>

       <Link to="/">Voltar</Link>
      </div>
    );
  }
}

function mapStateToProps(state) { return { ...state } }

const mapDispatchToProps = dispatch => bindActionCreators(
  {inserirPostDetalhado},dispatch
);
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(postDetalhado));


