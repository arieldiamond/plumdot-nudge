function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function fetchData() {
    const num = getRandomInt(36)
    const response = await fetch('https://raw.githubusercontent.com/arieldiamond/plumdot-nudge/main/nudges.json', {method: 'GET', 'Access-Control-Allow-Origin': '*' })
    const result = await response.json()
    document.getElementById('reminder').innerHTML = result[num].Prompt
}

fetchData();
