export function inserirComentarios(e){
  return{type:'INSERIR-COMENTARIOS',payload:e}
}
export function inserirNovoComentarios(e){
  return{type:'INSERIR-NOVO-COMENTARIOS',payload:e}
}
export function inserirComentarioAlterado(e){
  return{type:'INSERIR-COMENTARIO-ALTERADO',payload:e}
}

export function deletarComentario(e){
  return{type:'DELETAR-COMENTARIO',payload:e}
}

export function alterarVotoComentario(e){
  return{type:'ALTERAR-VOTO-COMENTARIO',payload:e}
}

export function limparComentarios(){
  return{type:'LIMPAR-COMENTARIOS'}
}


