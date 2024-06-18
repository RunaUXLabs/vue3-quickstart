const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        var num = Math.random();        //0~1사이의 난수 발생
        if (num >= 0.8) {
            reject("생성된 숫자가 0.8이상임 - " + num);
        }
        resolve(num);
    }, 2000);
});
// 생성코드

// 프로미스 객체가 넘기면 소비코드에서 함수형 실행한다
// 성공시 resolve를 넘겨받음
p.then((result) => {
    console.log("처리 결과 : ", result);
})
    // 실패시 reject를 넘겨받음
    .catch((error) => {
        console.log("오류 : ", error);
    });

console.log("## Promise 객체 생성!");