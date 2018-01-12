import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom'

class comentarios extends Component {

constructor(props){
  super(props);

  this.state={
    postId:'',
    comentarios:[]
  }
}

componentWillMount() {
  //recuperar o id que foi enviado via props
  this.setState({ postId:this.props.id });
}

componentDidMount(){
  axios
  .get(`http://localhost:3001/posts/${this.state.postId}/comments`, {
        headers: { Authorization: 'whatever-you-want' },
      })
      .then(response => {
        console.log('then(response ->', response.data);
        //setar o objeto de comentários no state
        this.setState({ comentarios: response.data });
      })
      .catch(error => { console.log('ERRO', error); });
}

render(){
  return (
    <div>
      <h3>Comentários</h3>
      <ul>
        {this.state.comentarios.map((item,key)=>(
          <li key={key}>
            Autor: {item.author}<br />
            Comentário: {item.body}<br />
            Score: {item.voteScore}
          </li>
        ))

        }
      </ul>
      <Link to={'/'}>Voltar</Link>
    </div>
  );
}
}


function mapStateToProps(state) {
  return { ...state }
}

export default connect(mapStateToProps)(comentarios);

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