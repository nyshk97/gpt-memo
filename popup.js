const showPopup = () => {
  const buttons = [
    {
      name: '以下のリリックのタイトル',
      text: '以下のリリックの曲に合うタイトルを10個考えてください。日本語で5個、英語で5個お願いします。'
    },
    {
      name: 'というニュアンスの表現',
      text: 'というニュアンスの表現を10個考えてください'
    },
    {
      name: 'というフレーズと組み合わせて使えるフレーズ',
      text: 'というフレーズと組み合わせて、歌詞に使えるフレーズを10個考えてください'
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
      const currentPos = inputText.selectionStart;
      const beforeText = inputText.value.substring(0, currentPos);
      const afterText = inputText.value.substring(currentPos);
      const text = beforeText + button.text + afterText;
      inputText.value = text;
      inputText.select();
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
