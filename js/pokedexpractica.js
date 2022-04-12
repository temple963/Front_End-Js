const ObtenerPokemon = async () => {

    try{
        
            const pokeNameInput = await document.getElementById("pokeName");
            let pokeName = await pokeNameInput.value;
            pokeName = await pokeName.toLowerCase();
           // async await
  
     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
     const data = await res.json()
     console.log(data)

     
     const Imagen = data.sprites.front_default;
     console.log(Imagen)
      
     const Names = data.species.name;
     console.log(Names)
     
     
     let habilidades = data.abilities.map(Poke => Poke.ability.name)
     console.log(habilidades)
    
 
     
     const Moves = data.moves.map(PokeM => PokeM.move.name).join('  ');
     console.log(Moves) 
     
     const Types = data.types.map(PokeT => PokeT.type.name)
     console.log(Types) 
     

     const arraystats = data.stats.map(PokeS => PokeS.base_stat)
     console.log(arraystats) 
      

     document.querySelector('#Tag_Pokemon').innerHTML = `<p > ${Names}</p>`

    document.querySelector('#Mov_table').innerHTML = `${Moves}`;
     
    
    document.querySelector('#Egg').innerHTML = `
    <img src="${Imagen}" width="100px" class="img-fluid rounded-circle">`
           
    
    document.querySelector('#Habs').innerHTML=` <tr>
                                                        <th>${habilidades[0]}</th>
                                                        <th>${habilidades[1]}</th>  
                                                    </tr>`
    
    document.querySelector('#Stat').innerHTML=`<tr>
    <th>${arraystats[0]}</th>
    <th>${arraystats[1]}</th>
    <th>${arraystats[2]}</th>
    <th>${arraystats[4]}</th>
    <th>${arraystats[5]}</th>  
                                                </tr>
    
    
    ` 
    
    const grafica = document.querySelector('#Migrafica');
    new chart (grafica,{
        type:"bar",
        data:{
            labels:arraystats,
            datasets:[
               
            ]
        }
    
    })



    }

      
    
    
        catch (error) {
     console.log(error)
    }
    
   }
   

  
ObtenerPokemon()
const pokedato=arraystats




console.log(pokedato)
// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector('#grafica');
// Las etiquetas son las que van en el eje X.
const etiquetas = ["Hp", "Atack", "Defense", "Special-Atack",
"Speed"]
// Podemos tener varios conjuntos de datos. Comencemos con uno
const datosVentas2020 ={
  label: "Stats Pokemon",
  data: pokedato, // La data es un arreglo que debe tener la
  backgroundColor: 'rgba(203,96,179,1)', // Color de fondo
  borderColor: ' rgba(226,226,226,1)', // Color del borde
  borderWidth: 1,// Ancho del borde I
};

new Chart($grafica, {
  type: 'bar', // Tipo de gráfica
  data:{
       labels: etiquetas,
       datasets:[
            datosVentas2020,
           
    
            // Aquí más datos...
       ]
          },
  options: {
       scales: {
            yAxes: [{
                 ticks: {
                      beginAtZero: true
                 }
                    }],
                  },
                }
              });

