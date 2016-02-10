$(function() {

  $("#showPokemon").on('click', function() {
    $("#pokemonForm").hide();
    $.getJSON('/pokemons', function(pokemon) {
      var table = $("#pokemon").find('tbody').empty();
      pokemon.forEach(function(pokemon) {  
        var tr = $("<tr>").addClass('pokemon').appendTo(table);
        $("<td>").appendTo(tr).text(pokemon.name);
        $("<td>").appendTo(tr).text(pokemon.element);
        $("<td>").appendTo(tr).text(pokemon.level); 
        $("#results").fadeIn('slow');
      }); 
    });
  }); 

});

