
window.onload = () => {

  const inputValue = document.getElementById("input-value").getBoundingClientRect().width;
  const lagrangeResult = document.getElementById("lagrange-result").getBoundingClientRect().width;
  const newtonDivResult = document.getElementById("newton-div-result").getBoundingClientRect().width;
  const gaussResult = document.getElementById("gauss-result").getBoundingClientRect().width;

  document.getElementById("input-placeholder").innerText = "Input value: " + inputValue;
  document.getElementById("lagrange-result-placeholder").innerText = "Lagrange: " + lagrangeResult;
  document.getElementById("newton-div-result-placeholder").innerText = "Newton div: " + newtonDivResult;
  document.getElementById("gauss-result-placeholder").innerText = "Gauss: " + gaussResult;
}