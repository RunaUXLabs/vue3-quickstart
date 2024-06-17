// p.35 메서드, 함수가 호출될 때마다 현재 호출중인 메서드를 보유한 객체가 this로 연결된다.
var add = function (x, y) {
    this.result = x + y;
};
console.log(add);
var obj = {};

//1. apply() 사용
add.apply(obj, [3, 4]); // 함수.apply(객체, [인자들])
console.log(obj); // 빈 객체 obj에 result 키가 추가되고 함수가 할당된것을 확인할 수 있음
// { result: 7 }

//2. call() 사용
add.call(obj, 5, 4); // 함수.call(객체, 인자들)
console.log(obj); // 빈 객체 obj에 result 키가 추가되고 함수가 할당된것을 확인할 수 있음
// { result: 9 }

//3. bind() 사용
add = add.bind(obj); // 객체에 함수연결 선언하여 변수에 할당
add(10, 4); // 인자 추가해서 콜링
console.log(obj);
// { result: 14 }

// 결론: 밖에 있는 함수를 객체로 추가할 수 있다. 함수안에 this가 있을 때, 이 함수가 바라보는 this에 대해 생각해 봐야한다. .call() .apply() .bind() 메서드를 사용하면 객체에 연결할 때 해당 this가 객체를 바라보게 할 수 있다.