$(function() {
  $("#showPokemon").on('click', function() {
    $("#pokemonForm").hide();
    $.getJSON('/pokemons', function(pokemons) {
      var table = $("#pokemons").find('tbody').empty();
      players.forEach(function(pokemon) {  
        var tr = $("<tr>").addClass('pokemon').appendTo(table);
        $("<td>").appendTo(tr).text(pokemon.name);
        $("<td>").appendTo(tr).text(pokemon.element);
        $("<td>").appendTo(tr).text(pokemon.level); 
        $("#results").fadeIn('slow');
      }); 
    });
  }); 
}); 