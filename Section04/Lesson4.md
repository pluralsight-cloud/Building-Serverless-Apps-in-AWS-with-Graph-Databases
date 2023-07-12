## Section 4 Lesson 4

Update the system:
```
sudo apt update -y
```

Install Java:
```
sudo apt install default-jre -y
```

Verify Java's install:
```
java -version
```

Install unzip:
```
sudo apt install unzip -y
```

Download Gremlin:
```
wget https://dlcdn.apache.org/tinkerpop/3.6.4/apache-tinkerpop-gremlin-console-3.6.4-bin.zip
```

Unzip the file:
```
unzip apache-tinkerpop-gremlin-console-3.6.4-bin.zip
```

Navigate to the folder:
```
cd apache-tinkerpop-gremlin-console-3.6.4/
```

Run Gremlin
```
 ./bin/gremlin.sh 
```

Create a TinkerGraph Sandbox:
```
graph = TinkerGraph.open()
```

Create a graph traversal source:
```
g = traversal().withEmbedded(graph)
```

Add the graph data:
```
v1 = g.addV("person").property(id, "d5a80900-054c-11ee-be56-0242ac120002").property("name", "Bob").property("age", 45).property("born", "April 4th, 1978").property("status", "married").next()
v2 = g.addV("person").property(id, "478689e8-054d-11ee-be56-0242ac120002").property("name", "Sally").property("age", 38).property("born", "June 9th, 1985").property("status", "married").next()
v3 = g.addV("person").property(id, "875825ae-054d-11ee-be56-0242ac120002").property("name", "Lisa").property("age", 21).property("born", "Febuary 2nd, 2002").property("status", "single").next()
v4 = g.addV("hobby").property(id, "e2d4fda8-054d-11ee-be56-0242ac120002").property("name", "Movies").next()
v5 = g.addV("hobby").property(id, "044b5860-054e-11ee-be56-0242ac120002").property("name", "Hiking").next()

g.addE("follows").from(v1).to(v2).property(id, "081b70d6-055a-11ee-be56-0242ac120002").property("since", "02/19/2020").next()
g.addE("follows").from(v2).to(v1).property(id, "a0ae9a42-056b-11ee-be56-0242ac120002").property("since", "02/19/2020").next()

g.addE("interest").from(v1).to(v4).property(id, "4e760c6c-055a-11ee-be56-0242ac120002").property("weight", 9.0).next()

g.addE("interest").from(v2).to(v4).property(id, "7f197746-055a-11ee-be56-0242ac120002").property("weight", 4.0).next()

g.addE("interest").from(v3).to(v4).property(id, "92a6068a-055a-11ee-be56-0242ac120002").property("weight", 1.0).next()

g.addE("interest").from(v1).to(v5).property(id, "acd4da40-055a-11ee-be56-0242ac120002").property("weight", 5.0).next()

g.addE("interest").from(v2).to(v5).property(id, "c745dfa0-055a-11ee-be56-0242ac120002").property("weight", 0.0).next()

g.addE("interest").from(v3).to(v5).property(id, "e9d13330-055a-11ee-be56-0242ac120002").property("weight", 9.0).next()
```

Basic queries:
```
g.V().has("person","name","Bob")
g.V().has("person","name","Bob").values("name")
g.V("d5a80900-054c-11ee-be56-0242ac120002").values("name")
g.V().has("person","name","Bob").out("interest")
g.V().has("person","name","Bob").out("interest").values("name")
g.V().has("person","name","Bob").out("interest").in("interest").values("name")
g.V().has("person","name","Bob").as("exclude").out("interest").in("interest").where(neq("exclude")).values("name")
g.V().has("person","name","Bob").as("exclude").out("interest").in("interest").where(neq("exclude")).values("name").dedup()
```

Find Bob's followers:
```
g.V("d5a80900-054c-11ee-be56-0242ac120002").outE("follows").inV().hasLabel("person").values("name")
```

Find people not following Bob:
```
g.V("d5a80900-054c-11ee-be56-0242ac120002").as("user").out("follows").hasLabel("person").as("followers").V().hasLabel("person").where(neq("followers")).where(neq("user")).values("name")
```
