function movesList(i) {
    let movesList = document.getElementById('moveId');
    movesList.innerHTML = '';

    for (let j = 0; j < 4; j++) {
        const element = currentPokemonArray[i];
        let moveName = element['moves'][j]['move']['name'];
        movesList.innerHTML += `<span class="typeBug">${moveName.charAt(0).toUpperCase() + moveName.slice(1)}</span>`
    }
    
}