const express = require('express');
const gremlin = require('gremlin');

const router = express.Router();
const __ = gremlin.process.statics;
const P = gremlin.process.P;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;
const dcReader = new DriverRemoteConnection('wss://'+ process.env.CLUSTER_ENDPOINT +':8182/gremlin', { mimeType: "application/vnd.gremlin-v2.0+json", rejectUnauthorized: false });
const graphReader = new Graph();
const gR = graphReader.traversal().withRemote(dcReader);

router.get('/people', async function (req, res, next) {
    const data = await gR.V().hasLabel('person').valueMap(true).toList();
    console.log(data)
    
    res.json({ data: data});
});

router.get('/people/:id', async function (req, res, next) {
    const { id } = req.params;
    const data = await gR.V(id).hasLabel('person').valueMap(true).toList();
    console.log(data)
    
    res.json({ data: data});
});

router.get('/people/:id/following', async function (req, res, next) {
    const { id } = req.params;
    const data = await gR.V(id).out("follows").hasLabel("person").valueMap(true).toList();
    console.log(data)
    
    res.json({ data: data});
});

router.get('/people/:id/followers', async function (req, res, next) {
    const { id } = req.params;
    const data = await gR.V(id).in_("follows").hasLabel("person").valueMap(true).toList();
    console.log(data)
    
    res.json({ data: data});
});

router.get('/people/:id/findfriends', async function (req, res, next) {
    const { id } = req.params;
    const data = await gR.V(id).as('user').outE("interest").has('weight', P.gte(7)).inV().hasLabel("hobby").inE("interest").has('weight', P.gte(7)).outV().where(P.neq('user')).valueMap(true).dedup().toList();
    console.log(data)
    
    res.json({ data: data});
});

router.get('/people/:id/hobbies', async function (req, res, next) {
    const { id } = req.params;
    const data = await gR.V(id).out("interest").hasLabel("hobby").valueMap(true).toList();
    console.log({ data: data })
    
    res.json({ data: data});
});

module.exports = router;