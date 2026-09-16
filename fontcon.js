const paragraph = document.getElementById('demoParagraph');

const textR = document.getElementById('textR');
const textG = document.getElementById('textG');
const textB = document.getElementById('textB');

const borderR = document.getElementById('borderR');
const borderG = document.getElementById('borderG');
const borderB = document.getElementById('borderB');

const borderWidth = document.getElementById('borderWidth');
const widthLabel = document.getElementById('widthLabel');

function clamp(value) {
  const n = Number(value);
  if (isNaN(n)) return 0;
  return Math.min(255, Math.max(0, n));
}

function updateStyles() {
  const tR = clamp(textR.value);
  const tG = clamp(textG.value);
  const tB = clamp(textB.value);

  const bR = clamp(borderR.value);
  const bG = clamp(borderG.value);
  const bB = clamp(borderB.value);

  const width = borderWidth.value;

  paragraph.style.color = `rgb(${tR}, ${tG}, ${tB})`;
  paragraph.style.borderColor = `rgb(${bR}, ${bG}, ${bB})`;
  paragraph.style.borderWidth = `${width}px`;
  widthLabel.textContent = `${width}px`;
}

[textR, textG, textB, borderR, borderG, borderB, borderWidth].forEach(input => {
  input.addEventListener('input', updateStyles);
});

updateStyles();