const themeButton = document.querySelector('#dark-theme');
const cancelButton = document.querySelector("#cancel")
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

themeButton.addEventListener("click", darkTheme);
cancelButton.addEventListener("click", cancel);