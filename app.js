
function onReady() {
  let toDos = [];
  let id = 0;

  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) return;

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id++;

    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach((toDo) => {
      const newLi = document.createElement('li');
      newLi.textContent = toDo.title;

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      //create and append delete button to newLi
      delButton = document.createElement('input');
      delButton.type = "button";
      delButton.value = "Delete";
      newLi.appendChild(delButton);
      // add listener which will delete the li based on it's id/index
      delButton.addEventListener('click', event => deleteLi(toDo.id));

      // attach newLi to toDoList
      toDoList.appendChild(newLi);
    });
  }

  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();

      // clear input
      newToDoText.value = '';
  });

  renderTheUI();

  var deleteLi = function(id) {
    toDos = toDos.filter(toDo => toDo.id !== id);
    renderTheUI();
  };
}

window.onload = function() {
  onReady();
};
