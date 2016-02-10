$(function() {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> tyne
=======


>>>>>>> samsbranch
  $("#showPokemon").on('click', function() {
    $("#pokemonForm").hide();
    $.getJSON('/pokemons', function(pokemons) {
      var table = $("#pokemons").find('tbody').empty();
      pokemons.forEach(function(pokemon) {  
        var tr = $("<tr>").addClass('pokemon').appendTo(table);
        $("<td>").appendTo(tr).text(pokemon.name);
        $("<td>").appendTo(tr).text(pokemon.element);
        $("<td>").appendTo(tr).text(pokemon.level); 
        $("#results").fadeIn('slow');
      }); 
    });
  }); 
<<<<<<< HEAD


  $("#addPokemon").on('click', function() {
    $("#results").hide();
    $("#pokemonForm").show();
  });

   $("#newPokemon").on('submit', function() {
    var name = $("#name").val();  
    var element = $("#element").val();
    var level = $("#level").val();

    if (name == "" || element == "" || level == "") {
      alert("You must fill out all fields, fool.");
      return false;
    }

     $.post('/pokemons', {name: name, element: element, level: level}, function(data) {
      if (data.result) {
        $("#name").add("#element").add("#level").val('');
        alert("Yay it worked. ID is: " + data.id);
      } else {
        alert("OOPS");
      }
    }, 'json');

    return false;
  });
});



 


  

<<<<<<< HEAD
=======
>>>>>>> tyne
}); 
=======
>>>>>>> samsbranch
