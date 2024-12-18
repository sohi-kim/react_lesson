import React from 'react';

function List({names}) {


  return (
      <ul>
          {
           names.map(item =>  <li>{item}</li>)
          }
      </ul>
  );
}

export default List;