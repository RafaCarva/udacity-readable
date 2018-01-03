import React, { Component } from 'react';
//componentes
import Posts from '../componentes/post';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

class react extends Component {
 constructor(props){
      super(props);
      this.state={
        seletorDePosts:[]
      }
   }

   componentDidMount(){    
    console.log('react.js > componentDidMount')
        axios
        .get ('http://localhost:3001/posts', {
          headers: {Authorization: 'whatever-you-want'},
        })
        .then (response => {
          let temp = response.data;
          let temp2 = temp.filter (item => item.category === 'react');
          this.setState(
            {seletorDePosts:temp2}
          );   
        })
        .catch (error => {
          console.log ('ERRO', error);
        });
       }

   render () {

    return (
      <div>
        <Link to="/"> Voltar</Link>
        <h1>react</h1>
        <Posts posts={this.state.seletorDePosts} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    ...state.ReducerCategorias,
    ...state.ReducerPosts,
    ...state,
  };
}
export default connect (mapStateToProps)(react);