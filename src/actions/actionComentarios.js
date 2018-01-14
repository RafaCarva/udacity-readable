export function inserirComentarios(e){
  return{type:'INSERIR-COMENTARIOS',payload:e}
}

export function deletarComentario(e){
  return{type:'DELETAR-COMENTARIO',payload:e}
}

export function limparComentarios(){
  return{type:'LIMPAR-COMENTARIOS'}
}