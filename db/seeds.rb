# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Sitter.destroy_all
Review.destroy_all

alan = Sitter.create(name: "Alan L. Cinsavich", hourly_rate: 35, location: "Columbia, MD")
adam = Sitter.create(name: "Adam Johnson", hourly_rate: 26, location: "NYC")
teresa = Sitter.create(name: "Teresa Nguyen", hourly_rate: 15, location: "Bellaire, TX")
thomas = Sitter.create(name: "Thomas Nguyen ", hourly_rate: 23, location: "Houston, TX")
steven = Sitter.create(name: "Steven Nguyen", hourly_rate: 20, location: "Houston, TX")
sam = Sitter.create(name: "Sammy Lee", hourly_rate: 18, location: "Fairfax, Virginia")
eric = Sitter.create(name: "Shmeric Yee", hourly_rate: 25, location: "NYC")
quang = Sitter.create(name: "Quang Do", hourly_rate: 21, location: "Houston, TX")
dilshan = Sitter.create(name: "Dilshan M", hourly_rate: 19, location: "Fairfax, Virginia")
charlie = Sitter.create(name: "Charlie G", hourly_rate: 26, location: "Detroit, Michigan")
jenny = Sitter.create(name: "Jenny Nguyen", hourly_rate: 14, location: "Dallas, TX")
jr = Sitter.create(name: "J.R.", hourly_rate: 11, location: "Dallas, TX")
emily = Sitter.create(name: "Emily Nguyen", hourly_rate: 22, location: "Houston, TX")

r1 = Review.create(review: "did a great job", sitter_id: 3, user_id: 1 )
r2 = Review.create(review: "my dog liked him a lot", sitter_id: 1, user_id: 1 )
r3 = Review.create(review: "my dog made a mess and it wasn't cleaned up", sitter_id: 3, user_id: 1 )
r4 = Review.create(review: "will book again", sitter_id: 10, user_id: 1 )
r5 = Review.create(review: "liked him a lot", sitter_id: 5, user_id: 1 )
r6 = Review.create(review: "vibed well with my dog", sitter_id: 4, user_id: 1 )
r7 = Review.create(review: "was late, and that was an inconvenience for me", sitter_id: 2, user_id: 1 )
r8 = Review.create(review: "wonderful dog-sitter", sitter_id: 3, user_id: 1 )
r9 = Review.create(review: "one and done", sitter_id: 6, user_id: 1 )
r10 = Review.create(review: "probably wouldnt book again", sitter_id: 13, user_id: 1 )

puts "Done seeding"
