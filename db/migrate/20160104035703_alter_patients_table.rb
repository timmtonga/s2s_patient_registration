class AlterPatientsTable < ActiveRecord::Migration
  def change
    rename_column :patients, :social_security_number, :national_id
  end
end
