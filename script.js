async function getAdvice() {
  const adviceElement = document.getElementById('advice');
  adviceElement.style.animation = 'none'; // önce sıfırla
  void adviceElement.offsetWidth; // reflow zorla (hilesi)
  adviceElement.style.animation = 'fadeInUp 0.8s ease forwards';

  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  adviceElement.innerText = data.slip.advice;
}
