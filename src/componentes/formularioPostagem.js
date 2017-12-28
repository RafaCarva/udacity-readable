import React from 'react';

const formularioPostagem = props => {
  const {categorias} = props;

  return (
    <form onSubmit={props.formSubmit}>
      <input type="text" name="nome" placeholder="Nome" /><br />
      <input type="text" name="titulo" placeholder="titulo" /><br />
      <input type="text" name="postagem" placeholder="postagem" /><br />
      <select name="categoria"><br />
        {categorias.categories
          ? categorias.categories.map ((link, key) => (
              <option>{link.name}</option>
            ))
          : ''}

      </select><br />
      <button>Enviar Postagem</button>

    </form>
  );
}
export default formularioPostagem;
