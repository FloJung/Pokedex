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
 
     const TypeOfPokemon = currentPokemonArray[i];
 
     if (TypeOfPokemon['types'].length > 1) {
        twoTypeAbout(TypeOfPokemon);
     
     } else {
        oneTypeAbout(TypeOfPokemon);
     }
}

function twoTypeAbout(TypeOfPokemon) {
    let typeFirst = TypeOfPokemon['types'][0]['type']['name'];
        let typeSecond = TypeOfPokemon['types'][1]['type']['name'];
        document.getElementById(`pokemonTypesID`).innerHTML = ``;
 
        document.getElementById(`pokemonTypesID`).innerHTML = `
        <span id="typeColor0"  class="types ">${typeFirst.charAt(0).toUpperCase() + typeFirst.slice(1)}</span>
        <span id="typeColor1" class="types ">${typeSecond.charAt(0).toUpperCase() + typeSecond.slice(1)}</span>
        `;
}


function oneTypeAbout(TypeOfPokemon) {
    let typeFirst = TypeOfPokemon['types'][0]['type']['name'];
    document.getElementById(`pokemonTypesID`).innerHTML = ``;
    document.getElementById(`pokemonTypesID`).innerHTML = `
    <span id="typeColor0" class="types ">${typeFirst.charAt(0).toUpperCase() + typeFirst.slice(1)}</span>`;
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