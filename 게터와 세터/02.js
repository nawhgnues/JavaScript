const user = {
  name: "Son",
  age: 50,

  // userName() 메서드 왼쪽에 get, set 키워드만 붙이면 알아서 Getter, Setter 로서 동작된다
  get userName() {
    return this.name;
  },
  set userName(value) {
    user.name = value;
  },
};

console.log(user.userName); // Son

// 프로퍼티 형식으로 사용
user.userName = "Lee";
console.log(user.userName); // Lee
