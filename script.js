

const notes_container = document.querySelector('.note_container');
const create = document.querySelector('header .btn');

// Function to display notes from localStorage
const shownotes = () => {
    notes_container.innerHTML = localStorage.getItem("notes") || '';
}
shownotes();

//Function to update localStorage with current notes
const updatestorage = () => {
    localStorage.setItem("notes", notes_container.innerHTML);
}

// Event listener to create a new note when the button is clicked
create.addEventListener('click', () => {
    let inputbox = document.createElement('p');
    let img = document.createElement('img');
    inputbox.className = "input_box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete_img.png";
    notes_container.appendChild(inputbox).appendChild(img);
    updatestorage();
});

// Event listener for clicks on the notes container
notes_container.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatestorage();
    } else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".input_box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updatestorage();
            }
        });
    }
});
