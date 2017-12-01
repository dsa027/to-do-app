var idIdx = -1;

function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      // get the text from input
      let title = newToDoText.value;
      if (title === '') return;

      // create new li, input
      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      // set the input's type to checkbox
      checkbox.type = "checkbox";

      // set li title, attach checkbox to li
      newLi.textContent = title;
      newLi.id = "li" + ++idIdx;
      newLi.appendChild(checkbox);

      //create and append delete button to newLi
      delButton = document.createElement('input');
      delButton.type = "button";
      delButton.value = "Delete";
      delButton.id = "del" + idIdx;
      newLi.appendChild(delButton);
      // add listener which will delete the li based on it's id/index
      delButton.addEventListener('click', deleteLi);

      // attach newLi to toDoList
      toDoList.appendChild(newLi);

      // clear input
      newToDoText.value = '';
  });
}

var deleteLi = (event) => {
  let id = 'li' + event.currentTarget.id.slice('del'.length);
  let li = document.getElementById(id);
  if (li) {
    toDoList.removeChild(li);
  }
};

window.onload = function() {
  // alert("The window has loaded");
  onReady();
};
