export function inserirPosts(e){
  return{
      type:'INSERIR-POSTS',
      payload:e
    }
}

export function inserirPostDetalhado(e){
  return{
      type:'INSERIR-POST-DETALHADO',
      payload:e
    }
}

export function listarMaiorScore(){
  return{type:'LISTAR-MAIOR-SCORE'}
}

export function listarMenorScore(){
  return{type:'LISTAR-MENOR-SCORE'}
}

export function listarMaisNova(){
  return{
    type:'LISTAR-MAIS-NOVA'
   //type: new Promise((resolve,reject)=>{setTimeout(()=>{'LISTAR-MAIS-NOVA'},1000)})
  }
}

export function listarMaisVelha(){
  return{type:'LISTAR-MAIS-VELHA'}
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
    payload:e
  }
}
export function actionSetarOrdenarPost(e){
  return{
    type:'SETAR-ORDENAR-POST',
    payload:e
  }
}