import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const pageNotFound = (props) =>{
  return(
    <div>
      Página não encontrada.
      <Link to="/">Voltar</Link>
    </div>
  )
}

export default withRouter(pageNotFound);



//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(postDetalhado));
//<Link to="/">Voltar</Link>
//import { Link, withRouter } from 'react-router-dom';