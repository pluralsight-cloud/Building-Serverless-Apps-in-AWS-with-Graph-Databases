const express = require('express');

//import express from "express";

const router = express.Router();

router.get('/', async function (req, res, next) {
    res.json({ data: 'Hello World!' });
});

module.exports = router;
//export default router;