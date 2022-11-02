if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}

// let counter = 0;
function count(message) {
  let counter = localStorage.getItem("counter");
  counter++;
  if (counter % 10 === 0) {
    document.querySelector("h1").innerHTML = `Hello ${counter} times)`;
  }
  localStorage.setItem("counter", counter);
}

function change() {
  const heading = document.querySelector("h2");
  if (heading.innerHTML === "Hello!") {
    heading.innerHTML = "Goodbye!";
  } else {
    heading.innerHTML = "Hello!";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;

  document.querySelector("form").onsubmit = function () {
    const name = document.querySelector("input#name").value;
    alert(`Hello, ${name}`);
  };

  document.querySelector("h1").innerHTML = `Hello ${localStorage.getItem(
    "counter"
  )} times`;

  //   setInterval(count, 100);
});

// api.exchangeratesapi.io/latest?base=USD
// AxGwgE3XTCulSsBJWB20tu3MYJXwIGXH
