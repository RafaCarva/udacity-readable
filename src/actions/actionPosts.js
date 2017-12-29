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
