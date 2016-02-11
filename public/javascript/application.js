$(function() {

  "use strict";

  var showEverything = function() {
    $("#pokemonForm").hide();
    $("#results").show();
    $.getJSON('/pokemons', function(pokemons) {
     var table = $("#pokemons").find('tbody').empty();
     pokemons.forEach(function(pokemon) {  
       var tr = $("<tr>").addClass('pokemon').appendTo(table);
       $("<td>").appendTo(tr).text(pokemon.name);
       $("<td>").appendTo(tr).text(pokemon.element);
       $("<td>").appendTo(tr).text(pokemon.level);
       $("<button>").appendTo(tr).html($("<button>")).text("Delete").on('click', function(){
        var self = $(this);
        $.post('/delete', {id: pokemon.id}, function(data) {
          if(data.success){
            alert("Pokemon has been deleted successfully.");
            tr.empty();
          } else {
            alert(+data.name+ "pokemon could not be deleted.");
          }
        }, 'json');
       });

      }); 
    });
  };

  $("#showPokemon").on('click', showEverything); 


  $("#addPokemon").on('click', function() {
    $("#results").hide();
    $("#pokemonForm").show();
  });

  $("#newPokemon").on('submit', function() {
    var name = $("#name").val();  
    var element = $("#element").val();
    var level = $("#level").val();

    if (name === "" || element === "" || level === "") {
      alert("All fields must be filled!");
      return false;
    }

    $.post('/pokemons', {name: name, element: element, level: level}, function(data) {
      if (data.result) {
        $("#name").add("#element").add("#level").val('');
          alert("New pokemon added! ID is: " + data.id);
          showEverything();
      } else {
        alert("Uh oh, duplicate pokemon names aren't allowed. Please try again.");
      }
    }, 'json');

    return false;
  });

  $('#searchPokemon').click(function(){
    $("#pokemonForm").hide();
    $.getJSON('/pokemons', function(pokemons) {
      var compareTo = $('#searchForPokemon').val();
      var table = $("#pokemons").find('tbody').empty();
      var counter = 0;
      pokemons.forEach(function(pokemon) {
       if (compareTo === pokemon.name) { 
          var tr = $("<tr>").addClass('pokemon').appendTo(table);
          $("<td>").appendTo(tr).text(pokemon.name);
          $("<td>").appendTo(tr).text(pokemon.element);
          $("<td>").appendTo(tr).text(pokemon.level); 
          $("#results").fadeIn('slow');
          counter++;  
        }
      });
      if (counter === 0) {
        alert("Could not find Pokemon");
      }
    });
  });  
});

