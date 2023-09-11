// 세터 무한 루프

let user = {
  name: "SON",

  get name() {
    return user.name;
  },

  set name(value) {
    user.name = value;
  },
};

// user 객체의 name 프로퍼티 값을 변경
user.name = "LEE";
// RangeError: Maximum call stack size exceeded
