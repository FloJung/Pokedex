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

            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = `
                                    <div id="typeOfPokemonOne${[i]}" class="types ">
                                    <span >${typeFirst.charAt(0).toUpperCase() + typeFirst.slice(1)}</span>
                                    </div>
                                    <div id="typeOfPokemonTwo${[i]}" class="types ">
                                        <span >${typeSecond.charAt(0).toUpperCase() + typeSecond.slice(1)}</span>
                                    </div>
                                `;
        
        } else {
            let typeFirst = secondTypeOfPokemon['types'][0]['type']['name'];
            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = ``;
            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = `
            <div id="typeOfPokemonOne${[i]}" class="types ">
            <span >${typeFirst.charAt(0).toUpperCase() + typeFirst.slice(1)}</span>
            </div>`;
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


async function weaknesses(i) {

    const typeOfPokemon = currentPokemonArray[i]
        
        let typeFirst = typeOfPokemon['types'][0]['type']['name'];
        let typeSecond = typeOfPokemon['types'][1]?.['type']['name'];

        let url = `https://pokeapi.co/api/v2/type/${typeFirst}`; 
        let response = await fetch(url);
        let types = await response.json();
        weaknessesArray.push(types);

        if (typeSecond) {
            let url2 = `https://pokeapi.co/api/v2/type/${typeSecond}`; 
            let response2 = await fetch(url2);
            let types2 = await response2.json();
            weaknessesArray.push(types2);
        }

    weaknessesHTML();
    weakList();
    weaknessesArray = [];
}


function typeWeaknesses() {
    
    for (let i = 0; i < currentPokemonArray.length; i++) {
        const pokemonType = weaknessesArray[i];

        for (let j = 0; j < pokemonType['damage_relations']['double_damage_from'].length; j++) {
            const typeName = pokemonType['damage_relations']['double_damage_from'][j]['name'];
            const className = `type${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`;

            let type = document.getElementById(`weakList${[i]}`);
            if (typeName) {
                type.classList.add(className);
            }
        } 
    }
}


async function weakList() {
    let weaknessesList = document.getElementById('weaknessesList');
    weaknessesList.innerHTML = '';

    for (let j = 0; j < weaknessesArray.length; j++) {
        const elementLi = weaknessesArray[j];
        
    
    for (let i = 0; i < elementLi['damage_relations']['double_damage_from'].length; i++) {
        let weaknessesName = elementLi['damage_relations']['double_damage_from'][i]['name'];
        let newID = `weakList${i}_${j}`;
         weaknessesList.innerHTML += `<li id="${newID}" class="types ">${weaknessesName.charAt(0).toUpperCase() + weaknessesName.slice(1)}</li>`;

            const typeName = elementLi['damage_relations']['double_damage_from'][i]['name'];
            const className = `type${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`;
            let type = document.getElementById(`${newID}`);
       
            if (typeName) {
                type.classList.add(className);
            } 
    }
    }
}


function movesList(i) {
    
    let movesList = document.getElementById('moveId');
    movesList.innerHTML = '';

    for (let j = 0; j < 4; j++) {
        const element = currentPokemonArray[i];
        let moveName = element['moves'][j]['move']['name'];
        movesList.innerHTML += `<span class="typeBug">${moveName.charAt(0).toUpperCase() + moveName.slice(1)}</span>`
    }
    
}


function about(i) {
    let pokemonAbout = currentPokemonArray[i];
    
    let height = pokemonAbout['height']/10;
    let weight = pokemonAbout['weight']/10;

    flavorText(i);
    aboutHTML(height, weight);
    CreateTheTypesForAbout(i);
    typeColorForAbout(i);
}


function CreateTheTypesForAbout(i) {
    let pokemonType = document.getElementById(`pokemonTypesID`);
    pokemonType.innerHTML = '';
 
 
     const secondTypeOfPokemon = currentPokemonArray[i];
 
     if (secondTypeOfPokemon['types'].length > 1) {
        let typeFirst = secondTypeOfPokemon['types'][0]['type']['name'];
        let typeSecond = secondTypeOfPokemon['types'][1]['type']['name'];
        document.getElementById(`pokemonTypesID`).innerHTML = ``;
 
         document.getElementById(`pokemonTypesID`).innerHTML = `
         <span id="typeColor0"  class="types ">${typeFirst.charAt(0).toUpperCase() + typeFirst.slice(1)}</span>
         <span id="typeColor1" class="types ">${typeSecond.charAt(0).toUpperCase() + typeSecond.slice(1)}</span>
                             `;
     
     } else {
         let typeFirst = secondTypeOfPokemon['types'][0]['type']['name'];
         document.getElementById(`pokemonTypesID`).innerHTML = ``;
         document.getElementById(`pokemonTypesID`).innerHTML = `
         <span id="typeColor0" class="types ">${typeFirst.charAt(0).toUpperCase() + typeFirst.slice(1)}</span>`;
     }
}


function typeColorForAbout(i) {
    for (let x = 0; x <= 1; x++) {
        const pokemonType = currentPokemonArray[i];
    
        const typeName = pokemonType['types'][x]?.type?.name;
    
        if (typeName) {
            const className = `type${typeName.charAt(0).toUpperCase() + typeName.slice(1)}`;
            let typeElement = document.getElementById(`typeColor${x}`);
    
            if (typeElement) {
                typeElement.classList.add(className);
            }
        }
    }
}


async function flavorText(i) {
    const namePokemon = currentPokemonArray[i]
        
            let text = namePokemon['name'];
            
            let url = `https://pokeapi.co/api/v2/pokemon-species/${text}/`; 
            let response = await fetch(url);
            let types = await response.json();
            let flavorText = types['flavor_text_entries'][9]['flavor_text']
            document.getElementById('pokemonText').innerHTML = flavorText;
}