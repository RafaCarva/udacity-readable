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
      payload:e
    }
}
