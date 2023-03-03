function showPopup() {
  var buttons = [
    {
      name: 'というニュアンスの表現',
      text: 'というニュアンスの表現を10個考えてください'
    },
    {
      name: 'というテーマで歌詞に使えるフレーズ',
      text: 'というテーマで歌詞を書くとき、使えそうなフレーズを10個考えてください'
    },
    {
      name: 'というフレーズと組み合わせて使えるフレーズ',
      text: 'というフレーズと組み合わせて、歌詞に使えるフレーズを10個考えてください'
    },
    {
      name: 'をおもしろく描写するフレーズ',
      text: 'をおもしろおかしく描写するフレーズを10個考えてください'
    },
    {
      name: 'に対する反論',
      text: 'に対する反論を10個考えてください'
    },
    {
      name: '架空の小説の書き出し',
      text: '架空の小説の書き出しを10個考えてください'
    },
    {
      name: '笑えるフレーズ',
      text: '笑えるフレーズを10個考えてください'
    },
    {
      name: '面白い単語',
      text: '面白い単語を10個教えてください'
    },
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
