import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Board(props) {
  const [searchParams, setSearchParams ] = useSearchParams()
  console.log('searchParams:',searchParams)

  //특정 파라미터값 가져오기
  const title = searchParams.get('title')
  const writer = searchParams.get('writer')

  return (
    <div>
      <h2>Board</h2>
      <p>url 의 path 는 "/board" 과 매칭된 컴포넌트</p>
      <hr/>
      { title && <h3> 검색(제목) : {title}</h3>}
      { writer && <h3>검색(글쓴이) : {writer}</h3>}
    </div>
  );
}

export default Board;