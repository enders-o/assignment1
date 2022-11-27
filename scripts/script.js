const themeButton = document.querySelector('#dark-theme');
const cancelButton = document.querySelector("#cancel")
const newNoteButton = document.querySelector("#new-note")
// console.log(themeButton);

const darkTheme = () => {
    document.body.classList.toggle('darkThemeBody');
    document.querySelector('aside').classList.toggle('darkThemeAside');
    document.querySelector('#about').classList.toggle('darkThemeBody');
    document.querySelector('#docs').classList.toggle('darkThemeBody');

    if (themeButton.textContent === 'Dark Theme') {
        themeButton.textContent = "Light Theme";
    } else {
        themeButton.textContent =  "Dark Theme";
    }
    
}

const cancel = () => {
    document.querySelector('textarea').style.display = 'none';
    document.querySelector('#save').style.display = 'none';
    document.querySelector('#cancel').style.display = 'none';
}

const newNote = () => {
    if ( document.querySelector('textarea').style.display === 'none') {
        document.querySelector('textarea').style.display = 'block';
        document.querySelector('#save').style.display = 'inline-block';
        document.querySelector('#cancel').style.display = 'inline-block';
        document.querySelector('textarea').value ="";
    } else {
        document.querySelector('textarea').value ="";
    }
}

themeButton.addEventListener("click", darkTheme);
cancelButton.addEventListener("click", cancel);
newNoteButton.addEventListener("click", newNote)