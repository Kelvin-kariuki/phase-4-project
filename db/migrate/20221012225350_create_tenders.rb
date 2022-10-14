class CreateTenders < ActiveRecord::Migration[6.1]
  def change
    create_table :tenders do |t|
      t.string :name
      t.integer :cost
      t.string :description
      t.string :serial

      t.timestamps
    end
  end
end
