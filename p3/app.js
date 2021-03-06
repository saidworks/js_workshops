/*
Problem description : we need to create a page that user can add his own tasks to add, it will allow him to see his added elements and delete the ones he desired to.

UI: there be an UI containing two parts one for user to add elements and one to show elements he added
user input : tasks as form text  
desired output : list of tasks 
how to get the desired output: we need to figure out a way to get the data input from user and store it in a way we can show it as a list in the HTML 


PSEUDO-CODE :
WHEN USER ENTER A TASK
    STORE IT 
    ADD TO A LIST 
WHEN USER CLICK ON DELETE 
    GET TO THE ELEMENT 
    DELETE ELEMENT
WHEN USER SEARCH 
    SHOW RESULTS BASED ON FIRST LETTER
    FIRST AND SECOND LETTER
    ...
    

*/
const form = document.querySelector(".add");
let list = document.querySelector(".todos");
const search = document.querySelector(".search > .form-control");

function addTodo(toDo) {
    const item = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${toDo}</span>
        <svg class="delete" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
      </li>`;
    list.innerHTML += item
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = form.add.value;
    if (todo.length > 0) {
        addTodo(todo)
        form.reset()
    } else {
        alert("pls enter a valid");
    }

});

// Delete todo
list.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove()
        }
    })
    //filter and search

addEventListener('keyup', filterTodo);

function filterTodo() {
    // Declare variables
    let filter, ul, li, i, txtValue;
    filter = search.value.toUpperCase();
    ul = list;
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent.toUpperCase();

        if (txtValue.includes(filter)) {
            span.style.display = "flex";
        } else {
            trash = li[i].getElementsByTagName("span")[1];
            span.style.display = "none";
            trash.style.display = "none";
        }

    }
}