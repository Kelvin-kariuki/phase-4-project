class CreateTenders < ActiveRecord::Migration[6.1]
  def change
    create_table :tenders do |t|
      t.string :title
      t.integer :user_id
      t.integer :minutes_to_complete
      t.text :instructions

      t.timestamps
    end
  end
end
