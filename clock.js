const displayTime = document.querySelector(".time").querySelector("h1");

function time() {
  const now = new Date();
  const nowHours = `${
    now.getHours() < 10 ? `0${now.getHours()}` : now.getHours()
  }`;
  const nowMinutes = `${
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
  }`;
  const nowSeconds = `${
    now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
  }`;
  displayTime.innerHTML = `${nowHours}:${nowMinutes}:${nowSeconds}`;
}

setInterval(time, 1000);