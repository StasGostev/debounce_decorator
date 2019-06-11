function debounce(func, delay) {
  let timeCounter;
  return function() {
    let self = this;
    let args = arguments;
    clearInterval(timeCounter);
    timeCounter = setInterval(function() {
      func.call(self, ...args);
    }, delay);
  };
}

function onChange(event) {
  console.log(event.target.value, this.value);
}
const input = document.getElementById('input');
let wrapper = debounce(onChange, 1000);

input.addEventListener("input", wrapper);
