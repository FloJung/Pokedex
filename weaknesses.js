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
            generateListOfWeaknesses(elementLi,weaknessesList, i, j);
        }
    }
}


function generateListOfWeaknesses(elementLi,weaknessesList, i, j) {
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