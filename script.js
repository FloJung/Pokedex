// git add .
// git commit -m "first commit"
// git push

let currentPokemonArray = [];
let weaknessesArray = [];
let currentURL = [];
let limit = 15;
let currentIndex = 0;
let stepSize = 25;

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

    console.log(currentPokemonArray);
    
    render();
}



function render() {
    renderPokemonInfo();
    typeOfPokemon();
    typePokemonSVG();
    pokemonWithTwoTypes();
    typePokemonOne();
    typePokemonTwo();
    // typePokemon();
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


        document.getElementById('pokedexCaseID').innerHTML += `
                                            <div id="typeOfPokemonClass${[i]}" class="pokemonCase" onclick="openOverview('${i}')">
                                                <div class="tag">
                                                    <h2 id="pokemonName">${updatetPokemon['name']}</h2>
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
                                    <span >${typeFirst}</span>
                                    </div>
                                    <div id="typeOfPokemonTwo${[i]}" class="types ">
                                        <span >${typeSecond}</span>
                                    </div>
                                `;
        
        } else {
            let typeFirst = secondTypeOfPokemon['types'][0]['type']['name'];
            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = ``;
            document.getElementById(`typeOfPokemon${[i]}`).innerHTML = `
            <div id="typeOfPokemonOne${[i]}" class="types ">
            <span >${typeFirst}</span>
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



function overview(i) {
    let pokemonId = currentPokemonArray[i];

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
                            <h1>${pokemonId['name']}</h1>
                            <p>#00${pokemonId['id']}</p>
                        </div>
                        <div class="navigation">
                            <a class="activ" href="#"  onclick="about(${i})">About</a>
                            <a href="#" onclick="weaknesses(${i})">Weaknesses</a>
                            <a href="#" onclick="baseMoves(${i})">Base Moves</a>
                        </div>

                        <div id="fieldOfVision">
                        <div class="about">

                        <span>
                            Dieses Pokémon trägt von Geburt an einen Samen auf dem Rücken, der im Laufe der Zeit keimt und wächst.
                        </span>
                
                        <div class="attribute">
                            <div class="baseStats">
                
                                <ul>
                                    <li>
                                    <span class="attributeTitle">Größe</span>
                                    <span class="attributeValue">0,7 m</span>
                                    </li>
                    
                                    <li>
                                    <span class="attributeTitle">Gewicht</span>
                                    <span class="attributeValue">6,9 kg</span>
                                    </li>
                    
                                </ul>
                
                            </div>
                
                            <div class="pokemonType">
                                <span  class="types typeGrass">Grass</span>
                                <span  class="types typePoison">Poison</span>
                            </div>
                
                        </div>
                    </div>
                           
                        </div>

                </div>
            </div>
        </div>
    `;
}

function about(i) {

   


    let pokemonAbout = currentPokemonArray[i];
    let about = document.getElementById('fieldOfVision');

   about.innerHTML = '';
   about.innerHTML = `
   <div class="about">

   <span>
       Dieses Pokémon trägt von Geburt an einen Samen auf dem Rücken, der im Laufe der Zeit keimt und wächst.
   </span>

   <div class="attribute">
       <div class="baseStats">

           <ul>
               <li>
               <span class="attributeTitle">Größe</span>
               <span class="attributeValue">0,7 m</span>
               </li>

               <li>
               <span class="attributeTitle">Gewicht</span>
               <span class="attributeValue">6,9 kg</span>
               </li>

           </ul>

           

       </div>

       <div class="pokemonType">
           <span  class="types typeGrass">Grass</span>
           <span  class="types typePoison">Poison</span>
       </div>

   </div>
</div>
   `;
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
            

    



    let weaknesses = document.getElementById('fieldOfVision');
    weaknesses.innerHTML = '';
    weaknesses.innerHTML = `
            <div class="weaknesses">

                <h2>Weaknesses:</h2>

                <ul class="statsWeaknesses" id="weaknessesList">

                </ul>

            </div>
    `;

    console.log(weaknessesArray);
    weakList();
    weaknessesArray = [];
}

async function weakList() {
    console.log(weaknessesArray);
    let weaknessesList = document.getElementById('weaknessesList');
    weaknessesList.innerHTML = '';

    for (let j = 0; j < weaknessesArray.length; j++) {
    const elementLi = weaknessesArray[j];
    
    for (let i = 0; i < elementLi['damage_relations']['double_damage_from'].length; i++) {

         weaknessesList.innerHTML += `
                <li class="types typeFire">${elementLi['damage_relations']['double_damage_from'][i]['name']}</li>
    `;
        
    }
    }

    
}



function baseMoves(i) {
    let pokemonMoves = currentPokemonArray[i];
    let baseMoves = document.getElementById('fieldOfVision');
    baseMoves.innerHTML = '';
    baseMoves.innerHTML = `
                <div class="baseMoves">
                    <span>Razor-Wind</span>
                    <span>Swords-Dance</span>
                        
                    <span>Cut</span>
                    <span>Bind</span>
                </div>
    `;
}