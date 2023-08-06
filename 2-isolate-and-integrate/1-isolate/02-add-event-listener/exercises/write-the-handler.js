'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));

const truthTestHandler = () => {
    // ask a user to confirm if they are honest
    const isHonest = confirm ('Are u honest?');
    // let them know what you think of their answer
    if (isHonest) {
        alert('That is great! Being honest is important.');
      } else {
        alert('Hmm, honesty is the best policy, you know.');
      }
};

buttonEl.addEventListener('click', truthTestHandler);

// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
