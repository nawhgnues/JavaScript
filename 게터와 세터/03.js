// 접근자 프로퍼티

let person = {
  /* 데이터 프로퍼티 */
  // 객체 내부에 저장된 실제 데이터 값
  firstName: "HEUNGMIN",
  lastName: "SON",

  /* 접근자 프로퍼티 */
  // 키와 값을 가지지 않고 게터와 세터라는 함수를 가지는 특수한 프로퍼티
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    let names = name.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  },
};

console.log(person.firstName); // HEUNGMIN
console.log(person.lastName); // SON

console.log(person.fullName); // HEUNGMIN SON
person.fullName = "KANGIN LEE"; // Setter 호출

console.log(person.fullName);
console.log(person.firstName); // KANGIN
console.log(person.lastName); // LEE
