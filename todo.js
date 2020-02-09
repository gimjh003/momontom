const toDoForm = document.querySelector(".makeToDo");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDoList");
const LS_TODO = "ToDo";
let toDos = [];

function saveToDo() {
  localStorage.setItem(LS_TODO, JSON.stringify(toDos));
}

function delToDo(event) {
  const toDoDelBtn = event.target;
  const toDoLi = toDoDelBtn.parentNode;
  toDoList.removeChild(toDoLi);
  const filteredToDoList = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(toDoLi.id, 10);
  });
  toDos = filteredToDoList;
  saveToDo();
}

function paintToDo(text) {
  const toDoLi = document.createElement("li");
  const toDoDelBtn = document.createElement("button");
  const toDoText = document.createElement("span");
  const toDoNewId = toDos.length + 1;
  toDoDelBtn.innerText = "❌";
  toDoDelBtn.addEventListener("click", delToDo);
  toDoText.innerText = text;
  toDoLi.appendChild(toDoText);
  toDoLi.appendChild(toDoDelBtn);
  toDoLi.id = toDoNewId;
  toDoList.appendChild(toDoLi);
  const toDoObj = {
    text: text,
    id: toDoNewId
  };
  toDos.push(toDoObj);
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDo() {
  const loadedToDos = localStorage.getItem(LS_TODO);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(todo) {
      paintToDo(todo.text);
    });
  }
}

loadToDo();
toDoForm.addEventListener("submit", handleSubmit);