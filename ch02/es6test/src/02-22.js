var p = new Promise((resolve, reject) => {
    resolve("first!");
});

p.then((msg) => {
    console.log(msg);
    // throw new Error("## 에러!!");
    // 납치! 무조건 에러 만들어서 내가 만든 메시지로 catch구문으로 던져!
    return "second";
})
    .then((msg) => {
        console.log(msg);
        return "third";
    })
    .then((msg) => {
        console.log(msg);
    })
    .catch((error) => {
        console.log("오류 발생 ==>  " + error);
    });