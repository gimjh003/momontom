const LS_NAME = "currentName",
  SHOW_ON = "showOn";

const form = document.querySelector(".jsNameForm");
const usernameInput = form.querySelector("input");
const usernamePaint = document.querySelector(".print");

function paintName(text) {
  form.classList.remove(SHOW_ON);
  usernamePaint.classList.add(SHOW_ON);
  usernamePaint.innerText = `Hello, ${text}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentName = usernameInput.value;
  localStorage.setItem(LS_NAME, currentName);
  paintName(currentName);
}

function askName() {
  form.classList.add(SHOW_ON);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentName = localStorage.getItem(LS_NAME);
  if (currentName === null) {
    askName();
  } else {
    paintName(currentName);
  }
}

loadName();