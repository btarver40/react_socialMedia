50.times do
  User.create(
    author: Faker::FunnyName.two_word_name,
    post: Faker::NewGirl.quote,
    body: Faker::Lorem.sentence,
  )
end

puts 'seeded'