function showPopup() {
  var buttons = [
    {
      name: 'ニュアンス',
      text: 'というニュアンスの表現を10個考えてください'
    },
    {
      name: 'テーマフレーズ',
      text: 'というテーマで歌詞を書くとき、使えそうなフレーズを10個考えてください'
    },
    {
      name: 'ボタン3',
      text: 'hoge3'
    }
  ];
  var buttonContainer = document.getElementById('button-container');
  var inputText = document.getElementById('input-text');

  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }

  buttons.forEach(function (button) {
    var btn = document.createElement('button');
    btn.textContent = button.name;
    btn.addEventListener('click', function () {
      var text = inputText.value + button.text;
      copyToClipboard(text);
    });
    buttonContainer.appendChild(btn);
  });

  inputText.focus();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function () {
    console.log('コピーしました: ' + text);
  }, function () {
    console.error('コピーできませんでした: ' + text);
  });
}

document.addEventListener('DOMContentLoaded', showPopup);
