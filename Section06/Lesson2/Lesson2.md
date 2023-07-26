Connect to Neptuen:
```
:remote connect tinkerpop.server conf/neptune-remote.yaml
:remote console
```

```
g.addV("person").property(id, "7961b9aa-2b3c-11ee-be56-0242ac120002").property("name", "Jill").property("age", 41).property("born", "January 13th, 1982").property("status", "single").next()
g.addV("person").property(id, "92a9b26e-2b3c-11ee-be56-0242ac120002").property("name", "Marven").property("age", 29).property("born", "December 21st, 1994").property("status", "single").next()
g.addV("person").property(id, "961fa61a-2b3c-11ee-be56-0242ac120002").property("name", "Tim").property("age", 22).property("born", "September 2nd, 2001").property("status", "married").next()
g.addV("person").property(id, "9a20145c-2b3c-11ee-be56-0242ac120002").property("name", "Will").property("age", 36).property("born", "March 4th, 1987").property("status", "single").next()
g.addV("person").property(id, "9d412ed2-2b3c-11ee-be56-0242ac120002").property("name", "Mary").property("age", 23).property("born", "Aughst 7th, 2000").property("status", "married").next()

g.addV("hobby").property(id, "9a121f44-2b3e-11ee-be56-0242ac120002").property("name", "Camping").next()
g.addV("hobby").property(id, "9e89d1e8-2b3e-11ee-be56-0242ac120002").property("name", "Marial Arts").next()
g.addV("hobby").property(id, "a2dabaaa-2b3e-11ee-be56-0242ac120002").property("name", "Comic Books").next()

g.V('d5a80900-054c-11ee-be56-0242ac120002').as('v1').V('961fa61a-2b3c-11ee-be56-0242ac120002').as('v2').addE("follows").from('v1').to('v2').property(id, "91bb4e70-2b3d-11ee-be56-0242ac120002").property("since", "02/21/2020").iterate()
g.V('d5a80900-054c-11ee-be56-0242ac120002').as('v1').V('961fa61a-2b3c-11ee-be56-0242ac120002').as('v2').addE("follows").from('v2').to('v1').property(id, "9719dbd4-2b3d-11ee-be56-0242ac120002").property("since", "02/22/2020").iterate()
g.V('d5a80900-054c-11ee-be56-0242ac120002').as('v1').V('7961b9aa-2b3c-11ee-be56-0242ac120002').as('v2').addE("follows").from('v1').to('v2').property(id, "099a7154-2b58-11ee-be56-0242ac120002").property("since", "02/21/2020").iterate()
g.V('d5a80900-054c-11ee-be56-0242ac120002').as('v1').V('7961b9aa-2b3c-11ee-be56-0242ac120002').as('v2').addE("follows").from('v2').to('v1').property(id, "f4e83d46-2b3d-11ee-be56-0242ac120002").property("since", "02/22/2020").iterate()

g.V('7961b9aa-2b3c-11ee-be56-0242ac120002').as('v1').V('9a121f44-2b3e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '011848b4-2b51-11ee-be56-0242ac120002').property('weight', 10.0).iterate()
g.V('7961b9aa-2b3c-11ee-be56-0242ac120002').as('v1').V('e2d4fda8-054d-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '1f5a0ca4-2b51-11ee-be56-0242ac120002').property('weight', 1.0).iterate()
g.V('7961b9aa-2b3c-11ee-be56-0242ac120002').as('v1').V('044b5860-054e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '2c80c67a-2b51-11ee-be56-0242ac120002').property('weight', 10.0).iterate()
g.V('92a9b26e-2b3c-11ee-be56-0242ac120002').as('v1').V('044b5860-054e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '4beb11fa-2b51-11ee-be56-0242ac120002').property('weight', 6.0).iterate()
g.V('92a9b26e-2b3c-11ee-be56-0242ac120002').as('v1').V('e2d4fda8-054d-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '5e8cd7a8-2b51-11ee-be56-0242ac120002').property('weight', 8.0).iterate()
g.V('92a9b26e-2b3c-11ee-be56-0242ac120002').as('v1').V('9a121f44-2b3e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '83628b72-2b51-11ee-be56-0242ac120002').property('weight', 7.0).iterate()
g.V('961fa61a-2b3c-11ee-be56-0242ac120002').as('v1').V('044b5860-054e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, 'ea3e5970-2b51-11ee-be56-0242ac120002').property('weight', 6.0).iterate()
g.V('961fa61a-2b3c-11ee-be56-0242ac120002').as('v1').V('e2d4fda8-054d-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, 'fdd80b34-2b51-11ee-be56-0242ac120002').property('weight', 6.0).iterate()
g.V('9a20145c-2b3c-11ee-be56-0242ac120002').as('v1').V('9e89d1e8-2b3e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '0e656f1e-2b52-11ee-be56-0242ac120002').property('weight', 9.0).iterate()
g.V('9a20145c-2b3c-11ee-be56-0242ac120002').as('v1').V('044b5860-054e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '24e3a4ea-2b52-11ee-be56-0242ac120002').property('weight', 3.0).iterate()
g.V('9a20145c-2b3c-11ee-be56-0242ac120002').as('v1').V('e2d4fda8-054d-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '3f6be368-2b52-11ee-be56-0242ac120002').property('weight', 7.5).iterate()
g.V('9d412ed2-2b3c-11ee-be56-0242ac120002').as('v1').V('9e89d1e8-2b3e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '274b692e-2b58-11ee-be56-0242ac120002').property('weight', 8.0).iterate()
g.V('9d412ed2-2b3c-11ee-be56-0242ac120002').as('v1').V('9a121f44-2b3e-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '68f61406-2b52-11ee-be56-0242ac120002').property('weight', 5.0).iterate()
g.V('9d412ed2-2b3c-11ee-be56-0242ac120002').as('v1').V('e2d4fda8-054d-11ee-be56-0242ac120002').as('v2').addE("interest").from('v1').to('v2').property(id, '812a0654-2b52-11ee-be56-0242ac120002').property('weight', 7.0).iterate()
g.V('').as('v1').V('').as('v2').addE("interest").from('v1').to('v2').property(id, '').property('weight', ).iterate()
g.V('').as('v1').V('').as('v2').addE("interest").from('v1').to('v2').property(id, '').property('weight', ).iterate()
g.V('').as('v1').V('').as('v2').addE("interest").from('v1').to('v2').property(id, '').property('weight', ).iterate()
g.V('').as('v1').V('').as('v2').addE("interest").from('v1').to('v2').property(id, '').property('weight', ).iterate()
```