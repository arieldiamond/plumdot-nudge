function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function fetchData() {
    fetch('./nudges.json')
        .then((response) => response.json())
        .then((json) => console.log(json));
}

fetchData();
