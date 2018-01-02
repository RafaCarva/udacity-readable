export function inserirPosts(e){
  return{
      type:'INSERIR-POSTS',
      payload:e
    }
}

/**
 * (e) vai ser o ID 
 */
export function deletarPosts(e){
  return{
      type:'DELETAR-POSTS',
      payload:e.data
    }
}

export function actionAlterarScore(e){
  //console.log('actionAlterarScore foi executado',e.data)
  return{
    type:'ALTERAR-SCORE',
    payload:e.data
  }
}