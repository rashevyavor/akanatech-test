async function fetchDataAsync(url) {
    const response = await fetch(url);
    console.log(await response.json());
}

fetchDataAsync('https://api.jsonbin.io/b/6133ce8f470d33259402768b');