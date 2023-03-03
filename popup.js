document.addEventListener('DOMContentLoaded', function () {
  var buttonA = document.getElementById('button-a');
  var buttonB = document.getElementById('button-b');
  var inputText = document.getElementById('input-text');

  buttonA.addEventListener('click', function () {
    var text = inputText.value + 'AAA';
    copyToClipboard(text);
  });

  buttonB.addEventListener('click', function () {
    var text = inputText.value + 'BBB';
    copyToClipboard(text);
  });

  function copyToClipboard(text) {
    var copyElement = document.createElement('textarea');
    copyElement.style.opacity = '0';
    copyElement.style.position = 'absolute';
    copyElement.textContent = text;
    document.body.appendChild(copyElement);
    copyElement.select();
    document.execCommand('copy');
    document.body.removeChild(copyElement);
  }
});
