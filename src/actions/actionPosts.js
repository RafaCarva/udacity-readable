export function inserirPosts(e){
  return{
      type:'INSERIR-POSTS',
      payload:e
    }
}

export function deletarPosts(e){
  return{
      type:'DELETAR-POSTS',
      payload:e
    }
}

export function actionAlterarScore(e){
  return{
    type:'ALTERAR-SCORE',
    payload:e
  }
}