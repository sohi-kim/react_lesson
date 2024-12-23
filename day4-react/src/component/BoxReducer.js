import React, { useReducer } from 'react';
//1. useReducer 함수에서 필요한 reducer 함수
// reducer 함수는 개발자 상태값을 바꾸기 위해 작성.
// 정해진 인자 : 첫번째 상태 변수 값 객체, 두번째는 추가 데이터 객체
function reducer(state , action){
    let {width, height,left,top} = state
    switch (action.type) {
        case "width_inc":
            width += 20;
            break;
        case "width_dec":
            width -= 20;
            break;
        case "height_inc":
            height+= 20;
            break;
        case "height_dec":
            height-= 20;
            break;
        default:
            break;
    }
    // 새로운 상태값 객체 리턴
    return { width,height,left,top}
}


// 2. 컴포넌트 함수
function BoxReducer() {
    // 초기값
    const box = {
        width: 100,
        height: 100,
        left: 300,
        top: 300
    }

    // BoxV2 에서 4개의 state 를 관리하기 위해 4개의 변경메소드
    // -> setWidth,setHeight, setLeft, setTop 
    // useReducer 는 많은 상태변수에 대해 사용해야하는 변경메소드를
    // 줄여주는 방법을 제공합니다.
    const [state, dispatch] = useReducer(reducer,box)

    // useReducer 함수의 리턴값
    //              state 는 상태변수. 객체 타입
    //              dispath 는 상태변수를 변경하는 메소드
    //            함수의 인자
    //              reducer(첫번째 인자) 는 개발자가 정의하는 state 상태값 변경 함수
    //              size (두번쨰 인자)는 초기값
    console.log('state:',state)




    const handleBox = (e)=>{
        const action = {type: e.target.id}
        // alert(action.type)
        // dispatch 실행할 때 action 만 전달. state 는 알아서 가져값니다.
        // dispatch 를 통하여 위에서 정의한 reducer 함수를 실행
        dispatch({type:action.type})
        console.log(state)
    }

    return (
        <>
            <div>
                <button onClick={handleBox} id="width_inc">width+20</button>
                <button onClick={handleBox} id="width_dec">width-20</button>
                <button onClick={handleBox} id="height_inc">height+20</button>
                <button onClick={handleBox} id="height_dec">height-20</button>
            </div>
            <div id='container'>
                {/* width,height,left, top 4개에 대한 상태 변수객체 state */}
                <Box box={state}/>
            </div>
        </>
    );
}

function Box({box}){

    const sandbox = {
            width: `${box.width}px`,
            height:`${box.height}px`,
            background: 'pink'
    }
    return (
        <div style={sandbox}>

        </div>
    )
}

export default BoxReducer;