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
      name: '笑えるフレーズ',
      text: '笑えるフレーズを10個考えてください'
    },
    {
      name: '面白い単語',
      text: '面白い単語を10個教えてください'
    },
    {
      name: 'あと10',
      text: 'あと10個教えてください'
    },
    {
      name: 'を10',
      text: 'を10個教えてください'
    },
  ];
  const buttonContainer = document.getElementById('button-container');
  const inputText = document.getElementById('input-text');

  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }

  buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.textContent = button.name;
    btn.addEventListener('click', () => {
      const text = inputText.value + button.text;
      navigator.clipboard.writeText(text)
    });
    buttonContainer.appendChild(btn);
  });

  inputText.focus();
};

document.addEventListener('DOMContentLoaded', showPopup);

// 入力値をlocal storageに保存する
document.getElementById('input-text').addEventListener('keyup', () => {
  const inputValue = document.getElementById('input-text').value;
  chrome.storage.local.set({ inputValue });
});

// ページが読み込まれたときに、local storageから値を読み込んで入力フィールドに設定する
chrome.storage.local.get(['inputValue'], result => {
  document.getElementById('input-text').value = result.inputValue || '';
});
