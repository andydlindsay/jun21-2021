# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Starting seeding..."

# create the planets
puts "creating planets"
10.times do
  Planet.create(
    planet_name: Faker::Movies::HitchhikersGuideToTheGalaxy.planet,
    species: Faker::Movies::HitchhikersGuideToTheGalaxy.specie
  )
end

# fetch the planets
puts "fetching planets"
planets = Planet.all

# create the locations
puts "creating locations"
50.times do
  Location.create(
    character: Faker::TvShows::TwinPeaks.character,
    location: Faker::TvShows::TwinPeaks.location,
    quote: Faker::TvShows::TwinPeaks.quote,
    planet: planets.sample
  )
end

puts "All done!!!"
