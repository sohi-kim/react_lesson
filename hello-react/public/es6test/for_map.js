// for 문을 대신하는 배열 메소드 : map
// 리액트 컴포넌트 return 에서 반복이 필요할때 사용

const twice = ['사나','모모','나연','채연']

for(let x of twice)
  console.log('멤버 : ', x)

twice.map((x) => console.log('*멤버* ', x))