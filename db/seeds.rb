# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Sitter.destroy_all

alan = Sitter.create(name: "Alan L. Cinsavich", hourly_rate: 35, location: "Columbia, MD")
adam = Sitter.create(name: "Adam Johnson", hourly_rate: 26, location: "NYC")
teresa = Sitter.create(name: "Teresa Nguyen", hourly_rate: 25, location: "Bellaire, TX")
thomas = Sitter.create(name: "Thomas Nguyen ", hourly_rate: 23, location: "Houston, TX")
steven = Sitter.create(name: "Steven Nguyen", hourly_rate: 20, location: "Houston, TX")

puts "Done seeding"
