## Section 4 Lesson 4

Add required packages
```
sudo apt update && sudo apt install -y apt-transport-https dirmngr
```

Add the Gremlin repo
```
echo "deb https://deb.gremlin.com/ release non-free" | sudo tee /etc/apt/sources.list.d/gremlin.list
```
Import the GPG key
```
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 9CDB294B29A5B1E2E00C24C022E8EF3461A50EF6
```

Install Gremlin
```
sudo apt update && sudo apt install -y gremlin gremlind
```
