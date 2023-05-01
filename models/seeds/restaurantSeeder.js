const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const User = require('../user')
const restaurantList = require('../../restaurant.json').results
const db = require('../../config/mongoose')

const SEED_USER_1 = {
  email: 'user1@example.com',
  password: '12345678'
}
const SEED_USER_2 = {
  email: 'user2@example.com',
  password: '12345678'
}

db.once('open', () => {
  Promise.all([
    bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER_1.password, salt))
    .then(hash => User.create({
      email: SEED_USER_1.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from({ length: 3 }, (_, i) => {
        const { name, name_en, category, image, location, phone, google_map, rating, description } = restaurantList[i]
        return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
      }))
    }),
    bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER_2.password, salt))
    .then(hash => User.create({
      email: SEED_USER_2.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from({ length: 3 }, (_, i) => {
        const { name, name_en, category, image, location, phone, google_map, rating, description } = restaurantList[i+3]
        return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
      }))
    })
  ])
  .then(() => {
    console.log('done.')
    process.exit()
  })
})