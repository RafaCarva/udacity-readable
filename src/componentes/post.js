import React from 'react';

const post = props => {
  const {posts} = props;
console.log("uuuu",posts);
  return (
    <ul>
    { posts.map ((link, key) => (
        
        <li>
        {console.log('foi')}
            {/*<p>id:{link.id}</p>*/}
            <p>titulo:{link.title}</p>
          </li>
        ))
      }
    </ul>
  );
};
export default post;
