var name = "홍길동";
var age = 20;
var email = "gdhong@test.com";

//var obj = { name: name, age: age, email: email };
var obj = { name, age, email };
// 프로젝트에서 es6이후 소스를 쓴다고 하면 이전버전에서만 돌아가는 시스템의 경우 에러가 날 수 있다. 이걸 레거시로 돌리는 기능이 Babel인데 이걸로 해당코드를 확인하면 객체리터럴 표기된 것을 기존 객체로 변경된 것을 확인할 수 있다는 소리.
// L.6의 코드(객체리터럴)가 L.5처럼 객체로 바뀐다는 개념만 이해하고 넘어가자! 
console.log(obj);