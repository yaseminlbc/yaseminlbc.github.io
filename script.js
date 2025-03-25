async function getAdvice() {
  const adviceElement = document.getElementById('advice');
  adviceElement.innerText = ''; // sıfırla

  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  const adviceText = data.slip.advice;

  let i = 0;
  const speed = 40; // yazı hızı (ms)

  function typeWriter() {
    if (i < adviceText.length) {
      adviceElement.innerText += adviceText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}
