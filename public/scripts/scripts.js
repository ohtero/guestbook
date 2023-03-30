

function sendData(){
  let name = document.getElementById('name');
  let country = document.getElementById('country');
  let message = document.getElementById('message');
  let data = { name: name.value, country: country.value, message: message.value };

  // console.log(data)

  fetch('/ajaxmessage', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  name = ''
  country = ''
  message = ''
}

const button = document.getElementById('post');
button.addEventListener('click', sendData);