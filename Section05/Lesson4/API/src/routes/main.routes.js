import express from "express";

const router = express.Router();

router.get('/', async function (req, res, next) {
    res.json({ data: 'Hello World!' });
});

export default router;