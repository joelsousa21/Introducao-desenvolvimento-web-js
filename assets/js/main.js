
function convertPokemonToHtml (pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail" >
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                
            </ol>
        <img src="../assets/images/poke_${pokemon.photo}.gif" alt="${pokemon.name}">

        </div>
        
    </li>`
}

const pokemonList = document.getElementById("pokemonList");


pokeApi.getPokemons().then((pokemons) => { 
    const newHtml = pokemons.map(convertPokemonToHtml).join('')
    pokemonList.innerHTML = newHtml
})

    