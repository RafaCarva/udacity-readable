import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {  Link, withRouter} from 'react-router-dom'
import { deletarPosts, actionAlterarScore } from '../actions/actionPosts'


class editarPost extends Component {

  constructor(props) {
    super(props);


  }//constructor


  render() {


    const editarPost = () => {


      //depoisd e editar, encaminha o cara para algum lugar
      //this.props.history.push('/detalhesDaConsulta');


    }//editarPost

    return (
      <span>
        dfdfdfd
  </span>
    )//return
  }//render
};

function mapStateToProps(state) {
  return { ...state }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    deletarPosts,
  },
  dispatch
);

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(editarPost));


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