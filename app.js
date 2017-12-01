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
      newLi.appendChild(checkbox);

      // attach newLi to toDoList
      toDoList.appendChild(newLi);

      // clear input
      newToDoText.value = '';
  });
}
window.onload = function() {
  // alert("The window has loaded");
  onReady();
};
