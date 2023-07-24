const express = require('express');
const gremlin = require('gremlin');

const router = express.Router();
const __ = gremlin.process.statics;
const P = gremlin.process.P;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;
const dcReader = new DriverRemoteConnection('wss://'+ process.env.CLUSTER_ENDPOINT +':8182/gremlin', { mimeType: "application/vnd.gremlin-v2.0+json" });
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

/*router.post('/people/add', async function (req, res, next) {
    const { name, age, status, born} = req.body;

    const data = await gR.addV('person').property('name', name).property('age', age).property('status', status).property('born', born).next();
    console.log(data)
    
    res.json(data);
});

router.post('/people/:id/follow', async function (req, res, next) {
    const { id } = req.params;
    const { to } = req.body;
    const date = new Date();

    console.log("id", id);
    console.log("to", to);
    console.log("date", date);
    console.log('query', `g.V('${id}').addE('follows').to(__.V('${to}')).property("since", '${date.toString()}').iterate()`);

    //const data = await gR.V(`'${id}'`).as('v1').V(`'${to}'`).as('v2').addE('follows').from('v1').to('v2').property("since", `'${date.toString()}'`).iterate();
    const data = await gR.V(`'${id}'`).addE('follows').to(__.V(`'${to}'`)).property("since", `'${date.toString()}'`).iterate();
    //const data = {'bla': 'test'}; 
    
    console.log("data", data);
    
    res.json(data);
});

router.delete('/people/:id', async function (req, res, next) {
    const { id } = req.params;

    const data = await gR.V().hasId(id).drop().next();
    console.log(data)
    
    res.json(data);
});*/

module.exports = router;
//export default router;
