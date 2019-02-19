window.onload = function () {
  //#region addEventListener
  const meSend = document.getElementById('meSend');
  const peshoSend = document.getElementById('peshoSend');

  meSend.addEventListener('click', () => sendBtbClicked('Me'));
  peshoSend.addEventListener('click', () => sendBtbClicked('Pesho'));

  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.addEventListener('keyup', () => (event.keyCode === 13) ? event.target.nextElementSibling.click() : null);
  }
  //#endregion

  //#region Send btn click
  const chat = document.getElementById('chat');

  function sendBtbClicked(user) {
    const input = event.target.previousElementSibling;

    const lengthOfInput = input.value.trim().length;
    if (lengthOfInput === 0) {
      input.value = '';
      input.focus();
      return;
    }

    const div = document.createElement('div');
    if (user === 'Me') div.className = ('myDiv');
    if (user === 'Pesho') div.className = ('peshoDiv');
    chat.append(div);

    const h3 = document.createElement('h3');
    h3.innerHTML = user;
    div.append(h3);

    const p = document.createElement('p');
    p.innerHTML = input.value;
    div.append(p);

    const hr = document.createElement('hr');
    div.append(hr);

    input.value = '';
    input.focus();
  }
  //#endregion
}