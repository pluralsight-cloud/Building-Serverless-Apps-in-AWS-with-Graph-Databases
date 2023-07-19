import express from "express";

const router = express.Router();
const gremlin = require('gremlin');
const traversal = gremlin.process.AnonymousTraversalSource.traversal;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;

const g = traversal().withRemote(new DriverRemoteConnection('ws://' + process.env.CLUSTER_ENDPOINT + ':8182/gremlin'));

router.get('/people', async function (req, res, next) {
    const data = await g.V().hasLabel('person').values('id', 'name').toList();
    console.log(data)
    res.json({ data });
});

export default router;