// 자바스크립트 내에서의 this는 '누가 나를 불렀나?'를 뜻한다.
// 즉, 선언이 아닌 호출에 따라 달라진다.
// 각 상황별로 this가 어디에 바인딩되는지 알아보자.
"use strict";

// 1. 단독으로 쓴 this → global object를 가리킨다.
console.log(this); // [object Window]

// 2. 함수 안에서 쓴 this → 함수의 주인(Window)에게 바인딩된다.
// strict mode에서 this는 Window가 아닌 undefined를 갖는다.
const name = "lee";
function sayHi() {
  console.log(this.name); // undefined.name;
}
sayHi(); // ERROR:  Cannot read properties of undefined (reading 'name')

// 3. 메서드 안에서 쓴 this → 메서드 호출 시 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩된다.
const user = {
  age: 25,
  name: "seunghwan",
  getUserDetail: function () {
    console.log(`Hi, my name is ${this.name}, I'm ${this.age}years old.`);
  },
};

user.getUserDetail();

// 4. 이벤트 핸들러 안에서 쓴 this → 이벤트를 받는 HTML 요소를 가리킨다.
const title = document.querySelector(".title");
title.addEventListener("click", function () {
  console.log(this); // <h1 class="title">Title</h1>
});

// arrow function 사용할 경우 this는 Window를 가리킨다.
title.addEventListener("click", () => {
  console.log(this); // Window
});

// arrow function 사용 시 this가 Window를 가리키는 이유?
// 화살표 함수의 this는 상위 스코프(window)의 this를 가리킨다 (Lexical this).
const userInfo = {
  name: "seunghwan",
  regularFunction: function () {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  },
};
userInfo.regularFunction(); // seunghwan
userInfo.arrowFunction(); // undefined

// 5. 생성자 안에서 쓴 this → 생성자 함수가 생성하는 객체로 바인딩된다.
function Person(name) {
  this.name = name;
}

var kim = new Person("kim");
var lee = new Person("lee");

console.log(kim.name); //kim
console.log(lee.name); //lee
