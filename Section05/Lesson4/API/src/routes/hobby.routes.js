const express = require('express');
const gremlin = require('gremlin');

const router = express.Router();

const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;
const dcReader = new DriverRemoteConnection('wss://'+ process.env.CLUSTER_ENDPOINT +':8182/gremlin', { mimeType: "application/vnd.gremlin-v2.0+json" });
const graphReader = new Graph();
const gR = graphReader.traversal().withRemote(dcReader);

router.get('/hobbies', async function (req, res, next) {
    let data = await gR.V().hasLabel('hobby').valueMap(true).toList();
    console.log(data)
    
    res.json(data);
});

router.get('/hobbies/:id', async function (req, res, next) {
    const { id } = req.params;
    let data = await gR.V(id).hasLabel('hobby').valueMap(true).toList();
    console.log(data)
    
    res.json(data);
});

module.exports =  router;
//export default router;
