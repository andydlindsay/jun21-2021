class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :character
      t.string :location
      t.string :quote

      t.references :planet, index: true, foreign_key: true

      t.timestamps
    end
  end
end
