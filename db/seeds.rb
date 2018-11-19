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
User.find(6).imgurl("https://profile-images.scdn.co/images/userprofile/default/c58ea6a9be0fabc0797f91daff2f0fb9908a4334")
p = Profile.new
p.user_id = User.find(1).id
p.save
User.find(1).profile.update(city: "miami",phone:"7865567842")
User.find(6).profile.update(city: "miami",phone:"7865967442")

puts User.all.count
puts Like.all.count
puts User.first.count
