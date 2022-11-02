document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").onsubmit = function () {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "AxGwgE3XTCulSsBJWB20tu3MYJXwIGXH");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    fetch(
      "https://api.apilayer.com/exchangerates_data/latest?base=USD",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("RESULT" + result);
        const currency = document
          .querySelector("#currency")
          .value.toUpperCase();
        const rate = result.rates[currency];
        if (rate !== undefined) {
          document.querySelector("#result").innerHTML = `1 USD = ${rate.toFixed(
            3
          )} ${currency}.`;
        } else {
          document.querySelector("#result").innerHTML = "Invalid currency";
        }
      })
      .catch((error) => console.log("ERROR", error));

    return false;
  };
});
