fetch('https://json.extendsclass.com/bin/2a71a3926323')
    .then(response => response.json())
    .then(data => console.log(data));