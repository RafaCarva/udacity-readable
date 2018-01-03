export function deletarCategorias(){
  return{type:'DELETAR-CATEGORIAS'}
}

export function inserirCategorias(e){
  return{
      type:'INSERIR-CATEGORIAS',
      payload:e
    }
}

export function setarCategoriaAtual(e){
  return{
    type:'SETAR-CATEGORIA-ATUAL',
    payload:e
  }
}