import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

// 메뉴가 필요한 페이지에서 모두 포함될 수 있도록
// route 를 중첩할 수 있습니다.
function Header(props) {
  const [name ,setName] = useState('')
  const profile_url =`/profile/${name}`
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/board">게시판</Link>
          </li>
          <li>
            <Link to="/board?title=react&writer=홍길동">(예)게시판 목록 조회</Link>
          </li>
          <li>
            <Link to="/profile">프로필</Link>
            <ul>
              {/* App.js 에서 라우트 정보 path 에 /profile/:username
                  username 변수에 해당하는 값을 Link 에 추가.
                  값을 받는 곳은 Profile 컴포넌트.
              */}
                {/* <li>사나 <Link to="/profile/sana">프로필</Link></li>
                <li>모모 <Link to="/profile/momo">프로필</Link></li>
                <li>나연 <Link to="/profile/nayeon">프로필</Link></li> */}
                <li>
                    <select onChange={(e)=> setName(e.target.value)}>
                      <option>선택</option>
                      <option value={"sana"}>사나</option>
                      <option value={"momo"}>모모</option>
                      <option value={"nayeon"}>나연</option>
                    </select>
                    <span>
                        <Link to={profile_url}>프로필</Link>
                    </span>
                </li>

            </ul>
          </li>
        </ul>
      </nav>
      {/* 부모 라우터의 컴포넌트가 자식 라우터 컴포넌트를 포함시키도록 합니다. */}
      <Outlet/>
    </div>
  );
}

export default Header;