// git add .
// git commit -m "first commit"
// git push

let currentPokemonArray = [];
let weaknessesArray = [];
let currentURL = [];
let limit = 10;


async function loadPokemon() {
    for (let i = 1; i <= limit; i++) {
        currentURL.push(i);
    }
    for (let i = 0; i < currentURL.length; i++) {
        const element = currentURL[i];
        
        let url = `https://pokeapi.co/api/v2/pokemon/${element}`; 
        let response = await fetch(url);
        pokemon = await response.json();

       currentPokemonArray.push(pokemon);       
    }
    render();
}

function loadMorePokemon() {
    limit = limit + 15;

    currentPokemonArray = [];
    weaknessesArray = [];
    currentURL = [];
    loadPokemon();
}


function render() {
    renderPokemonInfo();
    typeOfPokemon();
    typePokemonSVG();
    pokemonWithTwoTypes();
    typePokemonOne();
    typePokemonTwo();
}


function typeOfPokemon() {
    
    for (let i = 0; i < currentPokemonArray.length; i++) {
        const pokemonType = currentPokemonArray[i];

        const typeName = pokemonType['types'][0]['type']['name'];
        const className = `pokemonCase${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`;

        let type = document.getElementById(`typeOfPokemonClass${[i]}`);
       
        if (typeName) {
            type.classList.add(className);
        }
    }
}


function typePokemonSVG() {
    
    for (let i = 0; i < currentPokemonArray.length; i++) {
        const pokemonType = currentPokemonArray[i];

        const typeName = pokemonType['types'][0]['type']['name'];
        const className = `pokeballSVG${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`;

        let type = document.getElementById(`pokeballSVG${[i]}`);
        let type2 = document.getElementById(`2pokeballSVG${[i]}`);
       
        if (typeName) {
            type.classList.add(className);
            type2.classList.add(className);
        }
    }
}


function renderPokemonInfo() {
    document.getElementById('pokedexCaseID').innerHTML ='';

    for (let i = 0; i < currentURL.length; i++) {
        const updatetPokemon = currentPokemonArray[i]
        document.getElementById('pokedexCaseID').innerHTML += renderPokemonInfoHTML(updatetPokemon, i);
    }
}


function pokemonWithTwoTypes() { 
    for (let i = 0; i < currentPokemonArray.length; i++) {
        const secondTypeOfPokemon = currentPokemonArray[i];

        if (secondTypeOfPokemon['types'].length > 1) {
            let typeFirst = secondTypeOfPokemon['types'][0]['type']['name'];
            let typeSecond = secondTypeOfPokemon['types'][1]['type']['name'];
            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = ``;
            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = pokemonsTypeTwoHTML(typeFirst, typeSecond, i);
        
        } else {
            let typeFirst = secondTypeOfPokemon['types'][0]['type']['name'];
            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = ``;
            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = pokemonsTypeOneHTML(typeFirst, i);
        }
        
    }
}


function typePokemonOne() {
    for (let i = 0; i < currentPokemonArray.length; i++) {
        const pokemonType = currentPokemonArray[i];
        const typeName = pokemonType['types'][0]['type']['name'];
        const className = `type${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`;
        let type = document.getElementById(`typeOfPokemonOne${[i]}`);
        if (typeName) {
            type.classList.add(className);
        }
    }
}


function typePokemonTwo() {
    for (let i = 0; i < currentPokemonArray.length; i++) {
        const pokemonType = currentPokemonArray[i];
        if (pokemonType['types'].length > 1) {
            const typeName = pokemonType['types'][1]['type']['name'];
        const className = `type${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`;
        let type = document.getElementById(`typeOfPokemonTwo${[i]}`);
        if (typeName) {
            type.classList.add(className);
        }
        }     
    }
}


function openOverview(i) { 
    let removeClass = document.getElementById('openOverview');
    removeClass.classList.remove('d-none');
    overview(i);
}


function closeOverview() {
    document.getElementById('openOverview').addEventListener('click', function(event) {
        if (event.target.id === 'openOverview') {
            let overviewElement = document.getElementById('openOverview');
            overviewElement.classList.add('d-none');
        }
    });
}


function updateActiveLink(clickedLink) {
    const links = document.querySelectorAll('.navigation a');

    links.forEach(link => {
        link.classList.remove('activ');
    });
    clickedLink.classList.add('activ');
}








