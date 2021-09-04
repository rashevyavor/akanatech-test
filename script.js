fetchCurrencies(callback) {
    fetch(`https://api.jsonbin.io/b/6133ce8f470d33259402768b`)
        .then(response => response.json())
        .then(json => callback(null, json.currencies)
        .catch(error => callback(error, null))
}

fetchCurrencies((error, currencies)=> {
    if (error)
        console.log(error)
    else
        console.log(currencies[])

});