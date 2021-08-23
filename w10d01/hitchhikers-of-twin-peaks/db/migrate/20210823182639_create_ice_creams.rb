class CreateIceCreams < ActiveRecord::Migration[6.1]
  def change
    create_table :ice_creams do |t|

      t.timestamps
    end
  end
end
