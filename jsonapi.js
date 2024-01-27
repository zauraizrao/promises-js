

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


async function dataFetching() {
      let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let b = await a.json()
      console.log(b);
}
dataFetching()