let obj = { name: "홍길동", age: 20 };
// new Proxy(타켓객체, 할일들) 
const proxy = new Proxy(obj, {
    //get(타겟객체, 접근할속성명){실행문}
    get: function (target, key) {
        console.log("## get " + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다`);
        return target[key];
    },
    //set(타겟객체, 접근할속성명, 속성값){실행문}
    set: function (target, key, value) {
        console.log("## set " + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다`);
        target[key] = value;
    }
});

console.log(proxy.name);        //읽기 작업 get 호출
// proxy.name = "이몽룡";          //쓰기 작업 set 호출
// proxy.age = 30;                 //쓰기 작업 set 호출