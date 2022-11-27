const themeButton = document.querySelector('#dark-theme');
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

themeButton.addEventListener("click", darkTheme)