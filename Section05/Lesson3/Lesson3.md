Deploy Neptune:
sls deploy --param="ssh-key-name=neptune-key" --param="dbcluster=acg-neptune-demo"
```

Connect to Neptuen:
```
:remote connect tinkerpop.server conf/neptune-remote.yaml
:remote console
```

Add the graph data:
```
g.addV("person").property(id, "d5a80900-054c-11ee-be56-0242ac120002").property("name", "Bob").property("age", 45).property("born", "April 4th, 1978").property("status", "married").next()
g.addV("person").property(id, "478689e8-054d-11ee-be56-0242ac120002").property("name", "Sally").property("age", 38).property("born", "June 9th, 1985").property("status", "married").next()
g.addV("person").property(id, "875825ae-054d-11ee-be56-0242ac120002").property("name", "Lisa").property("age", 21).property("born", "Febuary 2nd, 2002").property("status", "single").next()
g.addV("hobby").property(id, "e2d4fda8-054d-11ee-be56-0242ac120002").property("name", "Movies").next()
g.addV("hobby").property(id, "044b5860-054e-11ee-be56-0242ac120002").property("name", "Hiking").next()

g.V('d5a80900-054c-11ee-be56-0242ac120002').as('v1').V('478689e8-054d-11ee-be56-0242ac120002').as('v2').addE("follows").from('v1').to('v2').property(id, "081b70d6-055a-11ee-be56-0242ac120002").property("since", "02/19/2020").iterate()
g.V('d5a80900-054c-11ee-be56-0242ac120002').as('v1').V('478689e8-054d-11ee-be56-0242ac120002').as('v2').addE("follows").from('v2').to('v1').property(id, "a0ae9a42-056b-11ee-be56-0242ac120002").property("since", "02/19/2020").iterate()

g.V('d5a80900-054c-11ee-be56-0242ac120002').as('v1').V('e2d4fda8-054d-11ee-be56-0242ac120002').as('v4').addE("interest").from('v1').to('v4').property(id, '4e760c6c-055a-11ee-be56-0242ac120002').property('weight', 9.0).iterate()
g.V('d5a80900-054c-11ee-be56-0242ac120002').as('v1').V('044b5860-054e-11ee-be56-0242ac120002').as('v5').addE("interest").from('v1').to('v5').property(id, '7f197746-055a-11ee-be56-0242ac120002').property('weight', 9.0).iterate()

g.V('478689e8-054d-11ee-be56-0242ac120002').as('v2').V('e2d4fda8-054d-11ee-be56-0242ac120002').as('v4').addE("interest").from('v2').to('v4').property(id, '92a6068a-055a-11ee-be56-0242ac120002').property('weight', 9.0).iterate()
g.V('478689e8-054d-11ee-be56-0242ac120002').as('v2').V('044b5860-054e-11ee-be56-0242ac120002').as('v5').addE("interest").from('v2').to('v5').property(id, 'acd4da40-055a-11ee-be56-0242ac120002').property('weight', 9.0).iterate()

g.V('875825ae-054d-11ee-be56-0242ac120002').as('v3').V('e2d4fda8-054d-11ee-be56-0242ac120002').as('v4').addE("interest").from('v3').to('v4').property(id, 'c745dfa0-055a-11ee-be56-0242ac120002').property('weight', 9.0).iterate()
g.V('875825ae-054d-11ee-be56-0242ac120002').as('v3').V('044b5860-054e-11ee-be56-0242ac120002').as('v5').addE("interest").from('v3').to('v5').property(id, 'e9d13330-055a-11ee-be56-0242ac120002').property('weight', 9.0).iterate()
```
