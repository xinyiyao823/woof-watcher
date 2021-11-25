# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Sitter.destroy_all

alan = Sitter.create(name: "Alan L. Cinsavich", hourly_rate: 35, location: "Columbia, Maryland")
adam = Sitter.create(name: "Alan L. Cinsavich", hourly_rate: 35, location: "Columbia, Maryland")
teresa = Sitter.create(name: "Alan L. Cinsavich", hourly_rate: 35, location: "Columbia, Maryland")
kim = Sitter.create(name: "Alan L. Cinsavich", hourly_rate: 35, location: "Columbia, Maryland")
steven = Sitter.create(name: "Alan L. Cinsavich", hourly_rate: 35, location: "Columbia, Maryland")

puts "Done seeding"
