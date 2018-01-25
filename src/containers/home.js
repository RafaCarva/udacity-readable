import React, { Component } from 'react';
//actions
import { inserirCategorias } from '../actions/actionCategorias';
import { inserirPosts } from '../actions/actionPosts';
//libs
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import serializeForm from 'form-serialize';
//componentes
import LinksCategorias from '../componentes/linksCategorias';
import Posts from '../componentes/post';
import FormularioPostagem from '../componentes/formularioPostagem';
import { PulseLoader } from 'halogenium';


class Home extends Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common['Authorization'] = 'whatever-you-want';

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    console.log('componentWillMount() foi executado')

    // pegar as categorias da api
    axios.get('http://localhost:3001/categories', {
      headers: { Authorization: 'whatever-you-want' },
    })
      .then(response => {
        this.props.inserirCategorias(response.data);
      })
      .catch(error => {
        console.log('ERRO ao dar get nas categorias da api', error);
      });

    // pegar os posts da api e por no store
    axios.get('http://localhost:3001/posts', {
      headers: { Authorization: 'whatever-you-want' },
    })
      .then(response => {
        //gravar os posts no store
        this.props.inserirPosts(response.data);
      })
      .catch(error => {
        console.log('ERRO', error);
      });
  } //componentDidMount

  formularioPostagemSubmit = e => {
    e.preventDefault();

    const valoresInputs = serializeForm(e.target, { hash: true });
    const dataId = Date.now();
    const autor = valoresInputs.nome;
    const titulo = valoresInputs.titulo;
    const postagem = valoresInputs.postagem;
    const categoria = valoresInputs.categoria;

    //gravar a postagem
    axios
      .post('http://localhost:3001/posts', {

        id: dataId,
        timestamp: dataId,
        title: titulo,
        body: postagem,
        author: autor,
        category: categoria,
      })
      .then(response => {
        axios
          .get('http://localhost:3001/posts', {
            headers: { Authorization: 'whatever-you-want' },
          })
          .then(response => {
            //console.log('array de categorias: ',response.data);
            this.props.inserirPosts(response.data);
          })
          .catch(error => {
            console.log('ERRO', error);
          });
      })
      .catch(error => {
        console.log('erro no POST', error);
      });
  };

  render() {

    console.log('render() foi executado')
    console.log('store posts', this.props.ReducerPosts.todosPosts)
    console.log('store categorias', this.props.ReducerCategorias.categorias)
    return (
      <div>
        {this.props.ReducerPosts.todosPosts.length
          ?
          <div>
            <h2>Categorias</h2>
            <LinksCategorias categorias={this.props.ReducerCategorias.categorias} />
            <h2>Posts</h2>
            <Posts posts={this.props.ReducerPosts.todosPosts} />
            <h2>Inserir Post</h2>
            <FormularioPostagem
              categorias={this.props.ReducerCategorias.categorias}
              formSubmit={this.formularioPostagemSubmit}
            />
          </div>
          :
          <div>
            <PulseLoader color="#26A65B" size="16px" margin="4px" />
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.ReducerCategorias,
    ...state.ReducerPosts,
    ...state,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      inserirCategorias,
      inserirPosts,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
