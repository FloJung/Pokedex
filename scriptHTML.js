function overview(i) {
    let pokemonId = currentPokemonArray[i];
    let pokemonName = pokemonId['name'];
    let pokemonIdName = pokemonId['id'];
    let overview = document.getElementById('openOverview');
    overview.innerHTML = '';
    overview.innerHTML =`
        <div class="overviewPokemon">
           <div class="pokeballoverview"> 
                <img class="pokemonOverview" src="${pokemonId['sprites']['other']['official-artwork']['front_default']}">
                    <svg class="pokeballSVGGrassOverview" viewBox="0 0 8.467 8.467">
                        <path d="M4.232 289.46a3.307 3.307 0 0 0-3.271 2.844h2.324c.172-.35.53-.595.947-.595.416 0 .774.244.946.595h2.325a3.307 3.307 0 0 0-3.271-2.845zM.944 293.098a3.307 3.307 0 0 0 3.288 2.976 3.307 3.307 0 0 0 3.29-2.976h-2.29c-.14.42-.534.728-1 .728-.467 0-.86-.308-1-.728z" transform="translate(0 -288.533)" class="color3b3c3d svgShape"></path>
                        <path d="M4.232 292.123a.646.646 0 0 0-.644.644c0 .354.29.644.644.644.354 0 .644-.29.644-.644a.647.647 0 0 0-.644-.644zm0 .264c.21 0 .38.169.38.38s-.17.38-.38.38a.377.377 0 0 1-.38-.38c0-.211.168-.38.38-.38z" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#60E3C4" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 -288.533)" class="color3b3c3d svgShape"></path>
                    </svg> 
                </div>
                    <div class="stats">
                        <div class="overviewName">
                            <h1>${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
                            <p>#00${pokemonIdName}</p>
                        </div>
                        <div class="navigation">
                            <a href="#" onclick="updateActiveLink(this); about(${i});">About</a>
                            <a href="#" onclick="updateActiveLink(this); weaknesses(${i});">Weaknesses</a>
                            <a href="#" onclick="updateActiveLink(this); baseMoves(${i});">Base Moves</a>
                        </div>

                        <div id="fieldOfVision">        
                        </div>
                </div>
            </div>
        </div>
    `;
    about(i);
}


function renderPokemonInfoHTML(updatetPokemon, i) {
    let pokemonName = updatetPokemon['name'];
    return `
    <div id="typeOfPokemonClass${[i]}" class="pokemonCase" onclick="openOverview('${i}')">
        <div class="tag">
            <h2 id="pokemonName">${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
            <p id="indexNummber">#00${updatetPokemon['id']}</p>
        </div>
        <div class="orderImge">
            <div id="typeOfPokemon${[i]}" class="types ">                                                       
            </div>                                                                                                                                                                                                             
                    <img id="imgOfPokemon" class="imageOfPokemon" src="${updatetPokemon['sprites']['other']['official-artwork']['front_default']}">
                
                    <div class="pokeballSVGCase">
                        <svg id="pokeballSVG${[i]}" class="pokeballSVG " viewBox="0 0 8.467 8.467">
                            <path d="M4.232 289.46a3.307 3.307 0 0 0-3.271 2.844h2.324c.172-.35.53-.595.947-.595.416 0 .774.244.946.595h2.325a3.307 3.307 0 0 0-3.271-2.845zM.944 293.098a3.307 3.307 0 0 0 3.288 2.976 3.307 3.307 0 0 0 3.29-2.976h-2.29c-.14.42-.534.728-1 .728-.467 0-.86-.308-1-.728z" transform="translate(0 -288.533)" class="color3b3c3d svgShape"></path>
                            <path d="M4.232 292.123a.646.646 0 0 0-.644.644c0 .354.29.644.644.644.354 0 .644-.29.644-.644a.647.647 0 0 0-.644-.644zm0 .264c.21 0 .38.169.38.38s-.17.38-.38.38a.377.377 0 0 1-.38-.38c0-.211.168-.38.38-.38z" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" fill="#60E3C4" color="#000" enable-background="accumulate" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 -288.533)" id="2pokeballSVG${[i]}" class="color3b3c3d svgShape"></path>
                        </svg>
                    </div>
            
        </div>
     </div>`;
}


function weaknessesHTML() {
    let weaknesses = document.getElementById('fieldOfVision');
    weaknesses.innerHTML = '';
    weaknesses.innerHTML = `
            <div class="weaknesses">
                <h2>Weaknesses:</h2>
                <ul class="statsWeaknesses" id="weaknessesList">
                </ul>
            </div>
    `;
}


function baseMoves(i) {
    let baseMoves = document.getElementById('fieldOfVision');
    baseMoves.innerHTML = '';
    
        baseMoves.innerHTML = `
            <div id="moveId" class="baseMoves">
                
            </div>
            `;
            movesList(i);
}


function aboutHTML(height, weight) {
    let about = document.getElementById('fieldOfVision');
    about.innerHTML = '';

    about.innerHTML = `
    <div class="about">
    <span id="pokemonText">
        
    </span>
    <div class="attribute">
        <div class="baseStats">
            <ul>
                <li>
                <span class="attributeTitle">Größe</span>
                <span class="attributeValue">${height} m</span>
                </li>
 
                <li>
                <span class="attributeTitle">Gewicht</span>
                <span class="attributeValue">${weight} kg</span>
                </li>
 
            </ul>
 
        </div>
 
        <div id="pokemonTypesID" class="pokemonType">
            
        </div>
 
    </div>
 </div>
    `;
}