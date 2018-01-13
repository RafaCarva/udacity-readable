export function actionEditarPost(e){
  return{
      type:'EDITAR-POST',
      payload:e
    }
}

export function actionLimparEditarPost(){
  return{
      type:'LIMPAR-EDITAR-POST'
    }
}

