// JS에서의 this는 함수를 호출한 방법에 의해 결정된다.
// call(), apply(), bind()를 이용하면 함수를 어떻게 호출했는지 상관하지 않고 this의 값을 설정할 수 있다.

// call()과 apply()
// call(), apply() 둘 다 this를 제어 후 함수 호출을 한다.
// 첫 번째 인자에 this를 바인딩하며, 이후의 값을 함수의 인자로 전달한다.
// 둘의 차이점은 call()은 함수의 매개변수에 따라 값을 넣고, apply()는 매개변수를 배열 형태로 담아 넣는다.
const obj1 = {
  value: "B",
};

const obj2 = {
  value: "C",
};

const person = {
  name: "Lee",
};

function consoleValue(name) {
  console.log(this.value);
  console.log(name);
}

consoleValue(); // this => window
consoleValue.call(obj1, person.name); // B Lee, this => obj1
consoleValue.call(obj2, person.name); // C Lee, this => obj2
consoleValue.apply(obj1, [person.name]); // B Lee, this => obj1
consoleValue.apply(obj2, [person.name]); // C Lee, this => obj2

// bind()
// bind()는 call(), apply()처럼 this를 제어하지만 함수 호출은 하지 않는다.
// 따라서 bind()를 사용할 경우 변수에 해당 함수를 담아서 사용한다.

let obj1Value = consoleValue.bind(obj1, person.name);
obj1Value(); // B Lee, this => obj1
