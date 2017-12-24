import React, { Component } from 'react';
//componentes
import LinksCategorias from '../componentes/linksCategorias'

class redux extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return (
        <div>
      <LinksCategorias />

      <h1>redux</h1>
      </div>
      );
   }
}

export default redux;
