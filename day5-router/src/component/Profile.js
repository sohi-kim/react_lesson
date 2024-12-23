import React from 'react';
import { useParams } from 'react-router-dom';

function Profile(props) {
  // 경로 파라미터를 받기 위해서 useParams 함수(훅)로 객체를 리턴받습니다.
  //  경로 파라미터가 여러개 가능함?
 const params = useParams()

 // 파라미터 객체중에 이름이 username 을 가져옵니다.
 const profile = params.username
 console.log("profile:",profile)
  return (
    <div>
      <h2>Profile</h2>
      <p>url 의 path 는 "/profile" 과 매칭된 컴포넌트</p>
      <hr/>
      { profile ? (  <h3> {profile} 의 프로필</h3>)
              :(<h3>지정된 사용자가 없습니다.</h3>)}
    </div>
  );
}

export default Profile;