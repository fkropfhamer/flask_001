function main() {
    // global.localStorage.getItem("mySharedData")
    console.log("darkmode");
    const darkmodeCheckBox = document.getElementById('darkmode');
    darkmodeCheckBox.onclick = () => darkmode(darkmodeCheckBox.checked);
}

function darkmode(isDarkMode) {
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = isDarkMode ? 'black' : 'white';
    body.style.color = isDarkMode ? 'white' : 'black';
}

window.onload = main();