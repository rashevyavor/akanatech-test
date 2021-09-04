let url = 'https://api.jsonbin.io/b/6133ce8f470d33259402768b';

fetch(url)
    .then(res => res.json())
    .then(out =>
        console.log('Checkout this JSON! ', out))
    .catch(err => throw err);