# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({:username => 'admin', :password => 'testing',:role =>'administrator',
          :first_name => 'Admin', :fathers_name => 'default', :mothers_name => 'user'})
User.create({:username => 'clerk', :password => 'testing',:role =>'clerk',
          :first_name => 'Data', :fathers_name => 'Entry', :mothers_name => 'Clerk'})
