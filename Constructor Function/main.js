"use strict";

class Student {
  // 생성자 함수란?
  // 객체를 생성하기 위해 사용되는 특수한 함수.
  // 편리하게 여러개의 비슷한 객체를 생성할 수 있게 해준다.
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.sayHi = function () {
      console.log(
        `안녕하세요 저의 이름은 ${name}이고 나이는 ${age} 이며, 키는 ${height}입니다.`
      );
    };
  }
}

// 객체가 생성된 후, 넘겨받은 인수와 함께 constructor가 자동으로 실행된다.
let student = new Student("nawhgnues", 25, 180);
console.log(student);
student.sayHi();

// 게터, 세터
class Account {
  constructor() {
    this._balance = 0;
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    this._balance = newBalance;
  }
}

const account = new Account();
account.balance = 10000;
account.balance; // 10000
