document.addEventListener('DOMContentLoaded', function () {
  var submitBtn = document.getElementById('submit-btn');
  var inputText = document.getElementById('input-text');

  submitBtn.addEventListener('click', function () {
    var text = inputText.value + 'hogehoge';
    var copyToClipboard = function (text) {
      var copyElement = document.createElement('textarea');
      copyElement.style.opacity = '0';
      copyElement.style.position = 'absolute';
      copyElement.textContent = text;
      document.body.appendChild(copyElement);
      copyElement.select();
      document.execCommand('copy');
      document.body.removeChild(copyElement);
    };
    copyToClipboard(text);
  });
});
