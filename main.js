async function getApis() {
    const request = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokemons = await request.json();
    console.log(pokemons);

    for (var pokemon of pokemons.results) {

        var pokeData = await (await fetch(pokemon['url'])).json();
      
        var pokeImg = pokeData['sprites']['front_default'];
        var pokeTipo = pokeData['types'][0]['type']['name'];

        var pokeItem = `
    <div class="col-3 poke-card">
        <div class="row">
            <div class="col">
                <img src="${pokeImg}"
                    alt="">
            </div>

            <div class="col">
                <div class="row">
                    <div class="col">
                        <p>${pokemon['name']}</p>

                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    ${pokeTipo}
                        Grass
                    </div>
                </div>
            </div>
        </div>

    </div>

`

        var pokerow = document.querySelector('#poke-row')
        pokerow.innerHTML = pokerow.innerHTML + pokeItem
        console.log(pokemon)
    }


}
getApis();