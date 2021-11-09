import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-notify-aio-3.1.0.min.js';

const refs = {
    boxEl: document.createElement("div"),
    pEl: document.querySelector("p"),
    inputDateTimePicker: document.querySelector("#datetime-picker"),
    btnStart: document.querySelector('button[data-start]'),
    divTimer: document.querySelector(".timer"),
    selectedDate: 0,
    dateNowGlobal: 0,
};

refs.boxEl.className = "boxElement";
refs.pEl.after(refs.boxEl);
refs.boxEl.prepend(refs.inputDateTimePicker, refs.btnStart, refs.divTimer);
refs.btnStart.setAttribute("disabled", "");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};


















<input type="text" id="datetime-picker" />



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}