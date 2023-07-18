// 클로저는 자신이 생성될 때의 환경을 기억하는 함수이다.

// 클로저를 사용하는 이유?
// #1. 전역변수를 줄일 수 있다.

// 클로저 미사용 시 count를 전역변수로 사용한다.
// 전역변수는 예상치 못한 사이드 이펙트를 일으킬 수 있기 때문에 최대한 줄이는 것이 좋다.
const btn = document.querySelector("btn");
btn.addEventListener("click", handleClick);

let count = 0;
function handleClick() {
  count++;
  return count;
}

// 클로저 사용하여 전역변수 없이 구현이 가능하다.
const Cbtn = document.querySelector("btn");
btn.addEventListener("click", handleClick());

function handleClick() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

// #2. 비슷한 형태의 코드의 재사용률을 높일 수 있다.
const order = (food) => {
  console.log(`${food}을(를) 주문하셨습니다.`);
  return function (drink) {
    return `${drink}을(를) 추가로 주문하셨습니다.`;
  };
};

const orderBurger = order("햄버거");
const orderPizza = order("피자");
console.log(orderBurger("콜라"));
console.log(orderBurger("사이다"));
