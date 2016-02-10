# Homepage (Root path)
get '/' do
  erb :index
end

get '/pokemons' do
  Pokemon.all.to_json
end

post '/pokemons' do
  name = params[:name]
  element = params[:element]
  level = params[:level]
  results = {result: false}

  pokemon = Pokemon.new(name: name, element: element, level: level.to_i)
  if pokemon.save
    results[:result] = true;
    results[:id] = pokemon.id;
  end
  results.to_json
end
