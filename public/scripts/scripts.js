

const messages = document.getElementById('guestbook-entries');




function parseMessage(name, country, message){
  let wrappedMessage = document.createElement('div');
  let newName = document.createElement('div');
  let newCountry = document.createElement('div');
  let newMessage = document.createElement('div');

  wrappedMessage.className = 'flex flex-col gap-y-2 p-8 bg-gray-100 bg-opacity-60 rounded shadow-md';
  newName.innerHTML = name;
  newName.className = 'font-bold';
  newCountry.innerHTML = country;
  newCountry.className = 'italic';
  newMessage.innerHTML = message;
  newMessage.className = 'border-t-2 border-slate-500';
  wrappedMessage.appendChild(newName);
  wrappedMessage.appendChild(newCountry);
  wrappedMessage.appendChild(newMessage);
  messages.appendChild(wrappedMessage);
};


function sendData(){
  const posterName = document.getElementById('name');
  const country = document.getElementById('country');
  const message = document.getElementById('message');

  if (posterName.value.length > 0 && country.value.length > 0 && message.value.length > 0) {
    let data = { name: posterName.value, country: country.value, message: message.value };

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('/ajaxmessage', options)
    .then(res => res.json())
    .then(data => {
      messages.innerHTML = '';
      data.forEach(({ name, country, message }) => {
        parseMessage(name, country, message);
      })
    })
    .catch(error => {alert(error.message)})

    posterName.value = ''
    country.value = ''
    message.value = ''

} else {
  alert('Fields can\'t be left empty')
  }   
}


const button = document.getElementById('post');
button.addEventListener('click', sendData);