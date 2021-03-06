// intro startup function
export const initialize = () => {
  setTimeout(() => {
    typingAnimation('p1', "Hi, I'm Adam.", 100);
  }, 1000);

  setTimeout(() => {
    typingAnimation('p2', "I'm looking for a team.", 100);
  }, 3500);

  setTimeout(() => {
    typingAnimation('header1', 'Are you looking', 100);
  }, 7500);

  setTimeout(() => {
    typingAnimation('header2', 'for a developer?', 100);
  }, 9300);

  setTimeout(() => {
    document.getElementById('portrait').classList.add('revealed');
  }, 11500);

  setTimeout(() => {
    document.getElementById('cta').classList.add('revealed');
  }, 11800);

  setTimeout(() => {
    document.getElementById('desktop').classList.add('revealed');
  }, 12100);

  setTimeout(() => {
    document.getElementById('github').classList.add('revealed');
  }, 13100);

  setTimeout(() => {
    document.getElementById('linkedin').classList.add('revealed');
  }, 13700);

  setTimeout(() => {
    let h2 = document.getElementById('header2');
    const span = document.getElementById('developer');
    if (!span) {
      h2.innerHTML = h2.innerHTML.replace(
        'developer',
        "<span id='developer'>developer</span>"
      );
    }
  }, 13000);

  setTimeout(() => {
    developerWordAnimation();
  }, 14000);
};

// animation functions
function typingAnimation(id, text, speed) {
  let element = document.getElementById(id);
  let textPosition = 0;
  element.textContent = '';

  writingFunc();

  function writingFunc() {
    element.textContent = text.substring(0, textPosition);
    if (textPosition++ !== text.length) {
      setTimeout(writingFunc, speed);
    }
  }
}

function developerWordAnimation() {
  const developer = document.getElementById('developer');
  developer.classList.add('gradient-initial');
  setInterval(() => {
    developer.classList.toggle('gradient-change');
  }, 1200);
}
