fetch('https://api.jsonbin.io/b/6134fc2885791e1732a056ee')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        displayRates(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function displayRates(data) {
    const myObj = JSON.parse(JSON.stringify(data));
    document.getElementById("currencyData").innerHTML = (myObj);
    console.log(myObj);
}