// 자바스크립트 동기, 비동기 복습

// 동기(synchronous)란?
// 위에서 부터 차례대로 코드를 실행하는 것
// 실행되고 있는 코드가 처리 될 동안 다른 코드들은 대기한다.
// cpu가 느려지거나 하는 것은 아니지만 시스템의 효율이 떨어진다고 할 수 있다.

// 비동기(asynchronous)란?
// 병렬적으로 코드를 수행하는 방식이다.
// 실행 중인 코드가 처리될 동안 다른 코드들도 실행된다.
// 비동기 처리 코드는 프로미스 객체를 반환한다.

// 비동기 처리 시 가장 간결하고 가독성이 좋은 코드를 작성하게 해주는 async, await에 대해 알아보자.
// 콜백이나 프로미스를 사용했을 때 보다 훨씬 더 보기 편하고 간결한 코드를 쓸 수 있다.
function fetchUser() {
  var url = "https://jsonplaceholder.typicode.com/users/1";
  return fetch(url).then(function (response) {
    return response.json();
  });
}

function fetchTodo() {
  var url = "https://jsonplaceholder.typicode.com/todos/1";
  return fetch(url).then(function (response) {
    return response.json();
  });
}

async function logTodoTitle() {
  try {
    // await을 사용하여 fetchUser()의 처리가 끝날 때 까지 기다린다.
    // await이 없다면 user데이터를 받아오기 전에 user데이터를 출력하는 코드를 실행시켜 에러가 발생한다.
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}

logTodoTitle();

// 비동기 처리를 잘 이용한다면 동시에 여러 작업을 진행 할 수 있어서 효율적인 코드를 작성할 수 있다.
// 단, 동기 코드보다 작성하기가 어렵기 때문에 주의가 필요하다.

// 콜백, 프로미스 처리보다 async, await을 사용하여 간결하고 가독성 좋은 코드를 작성할 수 있다.

// async 함수 내에서 await을 걸어 작업을 기다릴 수 있다.
