import React, { Component } from 'react';
//componentes
import LinksCategorias from '../componentes/linksCategorias'

class udacity extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return (
        <div>
      <LinksCategorias />

      <h1>udacity</h1>
      </div>
      );
   }
}

export default udacity;
