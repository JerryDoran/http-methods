const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

function getData() {
  axios
    .get('http://jsonplaceholder.typicode.com/posts')
    .then(res => console.log(res));
}

function sendData() {
  axios
    .post('http://jsonplaceholder.typicode.com/postss', {
      title: 'Some new title from axios',
      body: 'Hello from axios'
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
