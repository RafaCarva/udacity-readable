import React, { Component } from 'react';
//componentes
import Posts from '../componentes/post';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import {ordenarPosts} from '../utils/ordenarPosts'

class categoria extends Component {
  constructor(props) {
    //console.log('categoria construtor')
    super(props);
    console.log('****',props)

    this.state={
      postsDaCategoria:[]
    }

  }

 
componentWillMount(){
  console.log('componentWillMount')
  console.log('props.posts do jeito que vem no state: ',this.props.posts)
  this.setState({
    postsDaCategoria:this.props.posts
  
  })
}


  render() {
console.log('o que vai ser enviado é:',this.state.postsDaCategoria)
    return (
      <div>
        <Link to="/"> Voltar</Link>
        <h1>{this.props.ReducerCategorias.categoriaAtual}</h1>

        <Posts posts={this.props.posts.filter(item => item.category === this.props.ReducerCategorias.categoriaAtual)}/>

      </div>
    );
  }
}


//function mapStateToProps(state) {
//   return{...state}
//}

function mapStateToProps(state) {
  let posts;
  
  if (state.ReducerPosts.todosPosts.length){
  
  console.log('TEM POST',state.ReducerPosts.todosPosts )
  if(state.ReducerPosts.ordenarPost === 'maior-score'){
    
    this.posts = 
      state.ReducerPosts.todosPosts.sort((a, b) => {
        if (a.voteScore < b.voteScore) {return 1;}
        if (a.voteScore > b.voteScore) {return -1;}
        return 0;})
    
  }//if
  
  else if(state.ReducerPosts.ordenarPost === 'menor-score'){
    this.posts = 
      state.ReducerPosts.todosPosts.sort((a, b) => {
        if (a.voteScore > b.voteScore) {return 1;}
        if (a.voteScore < b.voteScore) {return -1;}
        return 0;})
    
  }//if 
  
  else if(state.ReducerPosts.ordenarPost === 'mais-nova'){
    this.posts = 
      state.ReducerPosts.todosPosts.sort((a, b) => {
        if (a.timestamp < b.timestamp) {return 1;}
        if (a.timestamp > b.timestamp) {return -1;}
        return 0;})
    
  }//if
  
  else if(state.ReducerPosts.ordenarPost === 'mais-velha'){
    this.posts = 
      state.ReducerPosts.todosPosts.sort((a, b) => {
        if (a.timestamp > b.timestamp) {return 1;}
        if (a.timestamp < b.timestamp) {return -1;}
        return 0;})
    
  }//if
  
  //console.log('antes de retornar ',this.posts)
  let posts =this.posts
  //console.log('posts = ',this.posts)
  return {...state, posts }
  }else
  {
    console.log('não tem post')
  return { ...state }
  }}

export default connect(mapStateToProps)(categoria);