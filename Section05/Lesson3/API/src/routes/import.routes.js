import express from "express";
//const axios = require('axios');
import axios from 'axios';

const router = express.Router();

router.get('/import', function (req, res, next) {
    res.json({ data: 'Loader' });
});

router.post('/import', async function (req, res, next) {
    const postData = {
        source : `s3://${process.env.S3_ENDPOINT}/loader/`,
        format : "csv",
        iamRoleArn : process.env.ROLE_ARN,
        region : process.env.AWS_REGION,
        failOnError : "FALSE"
    };

    try {
        const data = await axios.post(`https://${process.env.NEPTUNE_ENDPOINT}:8182/loader`, postData);
        console.log(data);
        res.send.json(data);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
    
});

export default router;