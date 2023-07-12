## Section 3 Lesson 3

Node.js GitHub resource:
```
https://github.com/nodesource/distributions
```

Install Node.js 19.x:
```
sudo curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - &&\
sudo apt-get install -y nodejs npm

```

Instal Serverless:
```
sudo npm install -g serverless
```

Add Access Key Id:
```
export AWS_ACCESS_KEY_ID=x
```

Add Secret Access Key:
```
export AWS_SECRET_ACCESS_KEY=x
```

Deploy Your Service:
```
sls deploy
```

Remove Your Service:
```
sls remove
```