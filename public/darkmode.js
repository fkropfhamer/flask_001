function main() {
    const darkModeConfig = global.localStorage.getItem("darkmode") === "true";
    darkmode(darkModeConfig);
    const darkmodeCheckBox = document.getElementById('darkmode');
    darkmodeCheckBox.checked = darkModeConfig;
    darkmodeCheckBox.onclick = () => darkmode(darkmodeCheckBox.checked);
    
}

function darkmode(isDarkMode) {
    global.localStorage.setItem("darkmode", isDarkMode);
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = isDarkMode ? 'black' : 'white';
    body.style.color = isDarkMode ? 'white' : 'black';

}


window.onload = main();