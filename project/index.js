// console.log('Hello Node!');
const axios = require('axios')
axios.get('https://jsonplaceholder.typicode.com/todos/1')
// 不打 1 就會顯示所有資料
.then(response => console.log(response.data))