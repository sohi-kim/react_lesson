import React from 'react';

function BoxV2(props) {
  const [box , setBox] = useSate({
              width: 100,
              height: 100,
              left: 300,
              top: 300
        })

        //상태 변수 box 를 바꿀 때 , 특정 프로퍼티만 바꾸지 말고
        // 객체 자체를 바꾸어야 합니다. 새로운 객체 생성
  const handleBox = (e) => {
    switch (e.target.id) {
      case "width_inc":
        setBox({...box, width:box.width + 10})
        break;
      case "width_dec":
        setBox({...box, width:box.width - 10})
        break;
      case "height_inc":
        setBox({...box, height:box.height + 10})
        break;
      case "height_dec":
        setBox({...box, height:box.height - 10})
        break;
      case "to_left":
        setBox({...box, left:box.left - 20})
        break;
      case "to_right":
        setBox({...box, left:box.left + 20})
        break;
      case "to_top":
        setBox({...box, top:box.top - 20})
        break;
      case "to_bottom":
        setBox({...box, top:box.top + 20})
        break;
      default:
        break;
    }
  }



  return (
    <div>
      <button onClick={handleBox} id="width_inc">가로+</button>
      <button onClick={handleBox} id="width_dec">가로-</button>
      <button onClick={handleBox} id="height_inc">세로+</button>
      <button onClick={handleBox} id="height_dec">세로-</button>
      <hr/>
      <button onClick={handleBox} id="to_left">←←←</button>
      <button onClick={handleBox} id="to_right">→→→</button>
      <button onClick={handleBox} id="to_top">↑↑↑</button>
      <button onClick={handleBox} id="to_bottom">↓↓↓</button>
    
      <div id='container'>
       {/* box 상태 변수는 4개의 프로퍼티를 갖는 '객체'로 테스트 */}
            <SandBox box={box}/>
      </div>
    
    </div>
  );
}

function SandBox(props){
  const boxstyle={
    width: `${props.width}px`,
    height:`${props.height}px`,
    left: `${props.left}px`,
    top:`${props.top}px`,
    position:'absolute',
    background:'green'
}
return(
    <div style={boxstyle}>

    </div>
)
}

export default BoxV2;