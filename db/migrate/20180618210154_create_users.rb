class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :author
      t.string :post
      t.text :body

      t.timestamps
    end
  end
end
