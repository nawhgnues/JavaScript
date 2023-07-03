"use strict";

const user = {
  name: "seunghwan",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};

// 화살표 함수의 this는 상위 스코프의 this를 가리킨다. 이를 Lexical this 라고 함.
user.regularFunction(); // seunghwan
user.arrowFunction(); // undefined
