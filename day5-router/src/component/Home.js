import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h2>HOME</h2>
      <p>url 의 path 는 "/"  가장먼저 보이는 컴포넌트</p>
      <hr/>
      {/* 사용자 페이지 이동을 할 수 있는 링크  */}
      <Link to="/about">소개</Link>
      <Link to="/board">게시판</Link>
      <Link to="/profile">프로필</Link>
    </div>
  );
}

export default Home;