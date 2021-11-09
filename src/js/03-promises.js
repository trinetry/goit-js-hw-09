import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  
  e.preventDefault();
  const { delay, step, amount }  = e.currentTarget;

  let delayNumber = Number(delay.value);
  let stepNumber = Number(step.value);
  let amountNumber = Number(amount.value);

  for (let position = 1; position <= amountNumber; position++) {
    
    createPromise(position, delayNumber);

    console.log("delayPromise", delayNumber, "position", position);
    delayNumber += stepNumber;    
  };

});


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      };

    }, delay);
  });

  promise
  .then(({ position, delay }) => {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  
};