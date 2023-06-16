const router = require('express').Router()

const {
    getAllBread, 
    getBreadById,
    creatBread,
    updateBreadById,
    deleteBreadById
   
} = require ('../controllers/bread')

//GET / get all breads
router.get('/', getAllBread)

//Get / :id get bread by id
router.get('/:id', getBreadById)

//POST/ creat Bread
router.post('/', creatBread)

//PUT /:id update bread by id 
router.put('/:id', updateBreadById)

//DELETE /:id delete bread by id 
router.delete('/:id', deleteBreadById)

module.exports = router