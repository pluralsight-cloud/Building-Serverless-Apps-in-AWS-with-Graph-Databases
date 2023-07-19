import express from "express";

const router = express.Router();
const gremlin = require('gremlin');
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;
const dcReader = new DriverRemoteConnection('wss://'+ process.env.CLUSTER_ENDPOINT +':8182/gremlin', { mimeType: "application/vnd.gremlin-v2.0+json" });
const graphReader = new Graph();
const gR = graphReader.traversal().withRemote(dcReader);

router.get('/people', async function (req, res, next) {
    const data = await gR.V().hasLabel('person').valueMap(true).toList();
    console.log(data)
    
    res.json(data);
});

router.get('/people/:id', async function (req, res, next) {
    const { id } = req.params;
    const data = await gR.V(id).hasLabel('person').valueMap(true).toList();
    console.log(data)
    
    res.json(data);
});

router.post('/people/add', async function (req, res, next) {
    const { name, age, status, born} = req.body;

    const data = await gR.addV('person').property('name', name).property('age', age).property('status', status).property('born', born).next();
    console.log(data)
    
    res.json(data);
});

router.post('/people/:from/follow', async function (req, res, next) {
    const { from } = req.params;
    const { to } = req.body;
    const date = new Date();

    console.log(req.body);
    console.log(to);

    const data = await gR.V(from).as('v1').V(to).as('v2').addE("follows").from('v1').to('v2').property("since", date.toString()).iterate();
    //console.log(`gR.V(${from}).as('v1').V(${to}).as('v2').addE("follows").from('v1').to('v2').property("since", ${date.format('MMM DD, YYYY')}).iterate()`);
    
    console.log(data);
    
    res.json(data);
});


router.delete('/people/:id', async function (req, res, next) {
    const { id } = req.params;

    const data = await gR.V().hasId(id).drop().next();
    console.log(data)
    
    res.json(data);
});

export default router;
