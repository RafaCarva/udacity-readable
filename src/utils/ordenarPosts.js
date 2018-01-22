export const ordenarPosts = (posts,tipoOrdenacao) => {
let postOrdenado;
console.log('entrou em ordenar post %%%%%%%%%%%%%%%%%%%%%%%%%')
console.log('o post recebido foi:',posts)
console.log('o filtro vai ser:',tipoOrdenacao)

  return {postOrdenado}
}

/*
function mapStateToProps(state) {
  let posts;
  console.log('***************',posts)
  
  if (state.ReducerPosts.todosPosts.length){
  
  console.log('tem algum post')
  if(state.ReducerPosts.ordenarPost === 'maior-score'){
    
    this.posts = [
      state.ReducerPosts.todosPosts.sort((a, b) => {
        if (a.voteScore < b.voteScore) {return 1;}
        if (a.voteScore > b.voteScore) {return -1;}
        return 0;})
    ]
  }//if
  
  else if(state.ReducerPosts.ordenarPost === 'menor-score'){
    this.posts = [
      state.ReducerPosts.todosPosts.sort((a, b) => {
        if (a.voteScore > b.voteScore) {return 1;}
        if (a.voteScore < b.voteScore) {return -1;}
        return 0;})
    ]
  }//if 
  
  else if(state.ReducerPosts.ordenarPost === 'mais-nova'){
    this.posts = [
      state.ReducerPosts.todosPosts.sort((a, b) => {
        if (a.timestamp < b.timestamp) {return 1;}
        if (a.timestamp > b.timestamp) {return -1;}
        return 0;})
    ]
  }//if
  
  else if(state.ReducerPosts.ordenarPost === 'mais-velha'){
    this.posts = [
      state.ReducerPosts.todosPosts.sort((a, b) => {
        if (a.timestamp > b.timestamp) {return 1;}
        if (a.timestamp < b.timestamp) {return -1;}
        return 0;})
    ]
  }//if
  
  console.log('antes de retornar ',this.posts)
  let temp={posts}
  return {temp }
  }else
  {
    console.log('não tem post')
  return { ...state }
  }
  
  
  
  }
  */