"use strict";

var p1 = {
  name: "아이패드",
  price: 200000,
  quantity: 2,
  order: function order() {
    if (!this.amount) {
      this.amount = this.quantity * this.price;
    }
    console.log("주문금액 : " + this.amount);
  },
  // 키: function(){} 설정하는 옛날 표기법
  discount: function discount(rate) {
    if (rate > 0 && rate < 0.8) {
      this.amount = (1 - rate) * this.price * this.quantity;
      // 선언식 함수에서 this를 쓰는 개념으로 이해하면 안된다!
      // 여기서 사용된 this는 객체 p1을 가르킨다.
    }
    console.log(100 * rate + "% 할인된 금액으로 구매합니다.");
  } // 함수명(){} 이렇게 표기법을 바꿀 수 있다
};
p1.discount(0.2);
p1.order();