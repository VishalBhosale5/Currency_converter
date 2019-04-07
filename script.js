document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#form").onsubmit = () => {
    const currency = document.querySelector("#Rate").value;
    fetch(`https://api.exchangeratesapi.io/latest?base=INR&symbols=${currency}`)
      .then(response => response.json())
      .then(data => {
        const contents = `1 INR is equal to ${
          data.rates[currency]
        } ${currency}.`;
        document.querySelector("#result").innerHTML = contents;
      })
      .catch(() => {
        document.querySelector("#result").innerHTML =
          "There is no such currency";
      });

    return false;
  };
});
