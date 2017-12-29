import React from 'react';

const formularioPostagem = props => {
  const {categorias} = props;

  return (
    <div>
    <form onSubmit={props.formSubmit}>
      <input type="text" name="nome" placeholder="Nome" />
      <input type="text" name="titulo" placeholder="titulo" />
      <input type="text" name="postagem" placeholder="postagem" />
      <select name="categoria">
        {categorias.categories
          ? categorias.categories.map ((link, key) => (
              <option key={key}>{link.name}</option>
            ))
          : ''}

      </select>
      <button>Enviar Postagem</button>

    </form>
    </div>
  );
}
export default formularioPostagem;
