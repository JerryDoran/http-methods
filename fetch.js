const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: data ? { 'Content-Type': 'application/json' } : {}
  }).then(res => {
    if (res.status >= 400) {
      return res.json().then(errData => {
        const error = new Error('Something went wrong');
        error.data = errData;
        throw error;
      });
    }
    return res.json();
  });
}

function getData() {
  sendHttpRequest('GET', 'http://jsonplaceholder.typicode.com/posts').then(
    data => {
      console.log(data);
    }
  );
}

function sendData() {
  sendHttpRequest('POST', 'http://jsonplaceholder.typicode.com/posts', {
    title: 'some title',
    body: 'some body'
  })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
