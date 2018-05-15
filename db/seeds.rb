# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#==========#
# Destroys #
#==========#

User.destroy_all
Subject.destroy_all
Topic.destroy_all
Question.destroy_all
Answer.destroy_all
Week.destroy_all
Day.destroy_all
Daily.destroy_all
Image.destroy_all
Label.destroy_all

Dir[File.join(Rails.root, 'db', 'seeds/*')].sort.each do |seed|
  load seed
end
