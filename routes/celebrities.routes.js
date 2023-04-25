// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Celebrity = require('../models/Celebrity.model')
const router = require('express').Router()

/* --- 1. GET celebrity index --- */
router.get('/', async(request, response) => {
    try {
        const allCelebrities = await Celebrity.find()
        console.log('Here are all the celebrities: ', allCelebrities)
        response.render('celebrities/celebrities', {allCelebrities})
    } catch(error) {
        console.log("Error happened (1) : ", error)
        response.redirect('/create')
    }
})

/* --- 2. (1) GET new celebrity create page --- */
router.get('/create', (request, response) => {
    response.render('celebrities/new-celebrity')
})


/* --- 2. (2) POST new celebrity create page --- */
router.post('/create', async(request, response) => {

    try{
        const newCelebrity = await Celebrity.create(request.body)
        console.log('Here is the new celebrity: ', newCelebrity)
        response.render('celebrities/celebrities')
        //res.render('celebrities/celebrities', { newCelebrities })

    } catch(error) {
        console.log("Error happened (2) : ", error)
        response.redirect('/create')
    }
})

module.exports = router