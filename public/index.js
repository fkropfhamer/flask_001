function sendData() {
    fetch("/send_data", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: [1,3,4,5], msg: "jo!"}),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}

function main() {
    console.log("loaded", Date.now())
    const button = document.getElementById("send");
    button.onclick = () => sendData();
}

window.onload = main();
