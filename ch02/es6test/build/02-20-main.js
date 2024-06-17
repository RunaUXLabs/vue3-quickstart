import getBase, { add } from './modules/02-19-module';
// import 해오는 자료의 출처는 무조건 상대경로로 가져온다!
// 확장자 생략가능, 같은 이름을 가진 다른형식의 파일이 있는경우 주의 
// export default 내보낸 객체를 땡겨올땐 {}에 담지 않는다.
console.log(add(4));
console.log(getBase());
// 변수로 가져온 getBase를 실행(익명함수가 변수에 할당된 것이므로 변수()로 콜링한다.)