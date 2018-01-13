import React, { Component } from 'react';
//import axios from 'axios';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deletarPosts } from '../actions/actionPosts'


class editarPost extends Component {

/*
  constructor(props) {
    super(props);


  }
*/

  render() {

    return (
      <span>
        <h2>dddd</h2>
      </span>
    );//return
  }//render
}//class

function mapStateToProps(state) {
  return { ...state }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deletarPosts,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(editarPost)


/**
 * :
author:"thingtwo"
body:"Everyone says so after all."
category:"react"
commentCount:2
deleted:false
id:"8xf0y6ziyjabvozdd253nd"
timestamp:1467166872634
title:"Udacity is the best place to learn React"
voteScore:6
*/