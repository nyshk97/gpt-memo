const showPopup = () => {
  const buttons = [
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
  const buttonContainer = document.getElementById('button-container');
  const inputText = document.getElementById('input-text');

  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }

  buttons.forEach((button) => {
    const btn = document.createElement('button');
    btn.textContent = button.name;
    btn.addEventListener('click', () => {
      const text = inputText.value + button.text;
      copyToClipboard(text);
    });
    buttonContainer.appendChild(btn);
  });

  inputText.focus();
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    console.log('コピーしました: ' + text);
  }, () => {
    console.error('コピーできませんでした: ' + text);
  });
};

document.addEventListener('DOMContentLoaded', showPopup);

chrome.storage.local.get(['inputValue'], (result) => {
  document.getElementById('input-text').value = result.inputValue || '';
});

const saveInputValue = () => {
  const inputValue = document.getElementById('input-text').value;
  chrome.storage.local.set({ inputValue: inputValue });
};

document.getElementById('input-text').addEventListener('keyup', saveInputValue);
