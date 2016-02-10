class AddPokemon < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :element
      t.integer :level
      t.timestamps null: false
    end
  end
end
