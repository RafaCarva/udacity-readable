import React, { Component } from 'react';
//componentes
import LinksCategorias from '../componentes/linksCategorias'

class react extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return (
        <div>
      <LinksCategorias />

      <h1>react</h1>
      </div>
      );
   }
}

export default react;
