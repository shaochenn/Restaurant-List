const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find()
    .lean()
    .then(restaurants => {
      const resultRestaurants = restaurants.filter( restaurant => {
        const nameLowerCase = restaurant.name.toLowerCase()
        const categoryLowerCase = restaurant.category.toLowerCase()
        return nameLowerCase.includes(keyword.toLowerCase()) || categoryLowerCase.includes(keyword.toLowerCase()) 
      })
      res.render('index', {restaurants: resultRestaurants, keyword})
    })
    .catch(error => console.log(error))
})

module.exports = router