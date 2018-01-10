import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Post from './post'
import axios from 'axios';

class postDetalhado extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      posts: []
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
        console.log('then(response ->', response.data);

        //por o post no state
        this.setState({ posts: response.data });
      })
      .catch(error => { console.log('ERRO', error); });
  }

  render() {

  console.log('render()-> this.state.post->',this.state.post);
    //const {posts} = this.state.post;
    //console.log('{posts}->',posts);
    return (
      <div>


        <h1>post detalhado</h1>
       {/* <Post posts={} /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state }
}

export default connect(mapStateToProps)(postDetalhado);


