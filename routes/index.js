const express = require('express')
const { findAllContent, findIdContent, createContent, updateContent, destroyContent } = require('../controllers')
const router = express.Router()

router.get('/content', findAllContent)
router.get('/content/:id', findIdContent)
router.post('/content', createContent)
router.put('/content/:id', updateContent)
router.delete('/content/:id', destroyContent)

module.exports = router