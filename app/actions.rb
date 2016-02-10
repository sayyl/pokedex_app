# Homepage (Root path)
get '/' do
  erb :index
end

get '/pokemons' do
  Pokemon.all.to_json
end