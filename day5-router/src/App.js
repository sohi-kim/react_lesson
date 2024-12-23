import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Board from './component/Board';
import Profile from './component/Profile';
import Home from './component/Home';
import Header from './component/Layout';

function App(props) {
  //라우팅 순서 1) 애플리케이션 라우터 설정
  return (
    <div>
        <BrowserRouter>
            {/* url 과 컴포넌트를 연결(지정) : path 는 url 설계하여 작성
                element 는 url  요청시 렌더링할 컴포넌트 */}
            <Routes>
              {/* Header 컴포넌트는 다른 라우팅을 중첩. 항상 보이는 
              레이아웃 페이지 */}
                <Route element={<Header/>}>
                  {/* http://localhost:3000/ */}
                  <Route path='/' element={<Home />}/>
                  {/* http://localhost:3000/about */}
                  <Route path='/about' element={<About/>}/>
                  <Route path='/board' element={<Board/>}/>
                  <Route path='/profile' element={<Profile/> }/>
                  <Route path='/profile/:username' element={<Profile/> }/>
                  <Route path='/profile/:username/:id' element={<Profile/> }/>
                  {/* : 기호 뒤는 경로파라미터 이름을 지정합니다.
                     실제 url에서는 : 기호 없이 값을 줍니다.
                     값을 설정하는 곳은 Link 입니다.
                  */}
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
