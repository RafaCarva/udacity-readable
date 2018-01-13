import React from 'react';
import {withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
//actions
import {setarCategoriaAtual} from '../actions/actionCategorias'

const linksCategorias = props => {
  //de todo o props, cria uma const 'categorias' com os dados do 'categorias' do props.
  //console.log(props);
  const {categorias} = props;

  const setarCategoria = (categoria) =>{
    //chamar a action
    props.setarCategoriaAtual(categoria);
    props.history.push(`/${categoria}`);
  }

  // <Link to={`/${link.category}/${link.id}`} >{link.title}</Link>

  return (
    <ul>
      {categorias.categories
        ? categorias.categories.map ((link, key) => (
            <li key={key}>            
              <button onClick={() => setarCategoria(link.name)} key={key}>{link.name}</button>
            </li>
          ))
        : ''}
    </ul>
  );
};

function mapStateToProps(state){
  return{...state}
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setarCategoriaAtual
  },dispatch
);

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(linksCategorias));
