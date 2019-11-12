const express = require('express')
const router = require('express').Router()

router.use('/', require('./postagens'))
router.use('/', require('./contato'))
router.use('/', require('./galeria'))
router.use('/', require('./login'))

module.exports = router