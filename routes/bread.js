const router = require('express').Router()

const {
    getAllBread, 
    getBreadById,
    creatBread
} = require ('../controllers/bread')

//GET / get all breads
router.get('/', getAllBread)

//Get / :id get bread by id
router.get('/:id', getBreadById)

//POST/ creat Bread
router.post('/', creatBread)
//PUT /:id update bread by id 

//DELETE /:id delete bread by id 

module.exports = router