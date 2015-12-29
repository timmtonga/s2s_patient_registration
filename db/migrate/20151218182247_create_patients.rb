class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients, :primary_key => :patient_id do |t|
			t.string :patient_identifier
			t.string :first_name
			t.string :middle_name
			t.string :fathers_name
			t.string :mothers_name
			t.string :fname_namecode
			t.string :mname_namecode
			t.string :fathers_name_namecode
			t.string :mothers_name_namecode
			t.string :gender
			t.date :birthdate
			t.boolean :birthdate_estimated, :default => false
			t.string :marital_status
			t.string :occupation
			t.string :social_security_number
			t.string :region_of_birth
			t.string :province_of_birth
			t.string :region_of_residence
			t.string :province_of_residence
			t.string :barrio_of_residence
			t.integer :creator
			t.date :date_voided
			t.boolean :voided, :default => false
			t.integer :voided_by
			t.timestamps null: false
    end
  end
end
