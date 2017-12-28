import React from 'react';

const post = props => {
  const {posts} = props;
  return (
    <ul>
      {posts.map ((link, key) => (
        <li>
          {/*<p>id:{link.id}</p>*/}
          <p>titulo:{link.title}</p>
        </li>
      ))}
    </ul>
  );
};
export default post;
