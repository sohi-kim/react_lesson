// 스프레드 연산. (전개 또는 펼침 연산) 기호는 ...
// 배열, 객체 복사할 때 사용합니다.
const people = {name:'길동',age: 23}

console.log('people:',people)

const people2 = {...people , name:'길순'}
console.log('people2:',people2)


// 2개의 배열을 합치는 예시
const kor = [90,56,78]
const eng = [77,88,99]

const score = [...kor , ...eng]
console.log('합쳐진 배열 : ',score)