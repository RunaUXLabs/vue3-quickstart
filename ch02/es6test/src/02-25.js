var arr = [10, 20, 30];
// new Proxy(타켓객체, 할일들)
const proxy = new Proxy(arr, {
    get: function (target, key, receiver) {
        console.log("## get " + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다`);
        return target[key];
    },
    set: function (target, key, value) {
        console.log("## set " + key);
        if (!target[key]) throw new Error(`존재하지 않는 속성(${key})입니다`);
        target[key] = value;
    }
});

proxy[1] = 99; // 바꿔, set함수 실행
// proxy[4] = 100;
// 없는 애한테 바꿔 실행했으므로 오류발생
// 일반적인 배열에서 없는애한테 값을 할당하면 추가되는데, 여기에서는 있는 애들한테 가져올까? 바꿀까? 만 할일을 부여할 수 있으므로 없는애한테 바꿔를 실행시키면 오류가 발생하는 것이다.
