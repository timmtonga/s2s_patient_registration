class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users, :primary_key => :user_id do |t|
      t.string :username
      t.string :first_name
      t.string :middle_name
      t.string :fathers_name
      t.string :mothers_name
      t.string :role
      t.string :password
      t.string :salt
      t.boolean :voided, :default => false
      t.integer :voided_by
      t.timestamps null: false
    end
  end
end
