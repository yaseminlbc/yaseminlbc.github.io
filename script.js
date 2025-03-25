async function getAdvice() {
  const adviceElement = document.getElementById('advice');
  adviceElement.innerText = ''; 

  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  const adviceText = data.slip.advice;

  let i = 0;
  const speed = 40; 

  function typeWriter() {
    if (i < adviceText.length) {
      adviceElement.textContent += adviceText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
}
getAdvice();
