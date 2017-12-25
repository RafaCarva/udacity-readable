export function deletarCategorias(){
  return{type:'DELETAR-CATEGORIAS'}
}


export function inserirCategorias(e){
  return{
      type:'INSERIR-CATEGORIAS',
      payload:e
    }
}
