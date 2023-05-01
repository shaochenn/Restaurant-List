const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

router.get('/search', (req, res) => {
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

// 匯出路由模組
module.exports = router