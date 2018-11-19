# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

(1..10).each{|n| User.create(email: "user#{n}@user.com", password: "password" )}
(2..10).each{|n|Like.create(liker: User.find(1), likee: User.find(n))}
(6..10).each{|n|Like.create(liker: User.find(n), likee: User.find(1))}

puts User.all.count
puts Like.all.count
