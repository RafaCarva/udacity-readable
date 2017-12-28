import React from 'react';

const post = props => {
  const {posts} = props;
  return (
    <ul>
      {posts.map ((link, key) => (
        <li>
          {/*<p>id:{link.id}</p>*/}
          titulo:{link.title}
          <br />
          category:{link.category}

          
        </li>
      ))}
    </ul>
  );
};
export default post;
