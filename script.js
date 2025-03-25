async function getAdvice() {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  document.getElementById('advice').innerText = data.slip.advice;
}

getAdvice();
