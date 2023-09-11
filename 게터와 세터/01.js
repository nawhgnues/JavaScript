const user = {
  name: "Kim",
  age: 100,

  // getter와 setter를 통해 경유한다.
  // 객체 내부 속성에 직접 접근하지 않아 객체의 정보 은닉을 가능하게 해주어 보안을 강화할 수 있다.
  // 코드의 안전성과 유지보수성을 높일 수 있다는 장점이 있다.
  // 또한 옳지 않은 값을 넣으려고 할 때 이를 미연에 방지할 수 있다.

  getName() {
    return user.name;
  },

  setName(value) {
    user.name = value;
  },

  setAge(value) {
    // 만일 나이 값이 100 초과일 경우 바로 함수를 리턴해서 user.name이 재설정되지 않도록 필터링
    if (value > 100) {
      console.error("나이는 100을 초과할 수 없습니다.");
      return;
    }

    user.age = value;
  },
};

console.log(user.name); // Kim

user.setName("Son");
console.log(user.getName()); // Son

user.setAge(1000); // 나이는 100을 초과할 수 없습니다.

user.setAge(50);
console.log(user.age); // 50
