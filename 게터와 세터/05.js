//  세터 무한루프를 방지하기 위해서 접근자 프로퍼티명과 데이터 프로퍼티명을 다르게 하거나
//  내부적으로 다른 변수에 값을 저장하도록 한다.

const person = {
  _name: "SON", // 데이터 프로퍼티명을 _name으로 변경
  set name(value) {
    this._name = value; // _name에 값을 할당
  },
};

person.name = "LEE";
console.log(person._name); // LEE
