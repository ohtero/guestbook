

function sendData(){
  const url = 'https://localhost:3000';
  fetch(url, {
    method: 'post',
    mode: 'no-cors',
    
    headers: {
      'content-type': 'application/json',
      'cross-origin-access-control': '*'
    },
    body: {'key': 'value'}  
  })
  .then(res => console.log(res));

}

const button = document.getElementById('post');
button.addEventListener('click', sendData);