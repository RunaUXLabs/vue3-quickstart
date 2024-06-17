function foodReport(name, age, ...favoriteFoods) {
    console.log(`${name}, ${age}`);
    console.log(favoriteFoods); // 나머지 짬처리 하여 배열로 반환
    console.log(...favoriteFoods); // 나머지 짬처리 하여 스트링으로 반환
}

foodReport("이몽룡", 20, "짜장면", "냉면", "불고기");
foodReport("홍길동", 16, "초밥");