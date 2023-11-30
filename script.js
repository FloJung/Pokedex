// git add .
// git commit -m "first commit"
// git push



async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/1';  
    let response = await fetch(url);
    let responseAsJoson = await response.json();

    console.log(responseAsJoson);
}