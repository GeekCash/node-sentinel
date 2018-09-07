# GeekCash Sentinel Node.js


This guide covers installing Sentinel onto an existing Masternode in Ubuntu 14.04 / 16.04.

## Installation

### 1. Install Prerequisites

Make sure Node v8.x.x or above is installed:
```js
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
```js
sudo apt-get install -y build-essential libzmq-dev

```
Install PM2:
```js
# 1. Add the PM2 repository signing key
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv D1EA2D4C

# 2. Add the PM2 repository
echo "deb http://apt.pm2.io/ubuntu stable main" | sudo tee /etc/apt/sources.list.d/pm2.list

# 3. Update list of available packages
sudo apt-get update

# 4. Install PM2
sudo apt-get install pm2
```

Make sure the local GeekCash daemon running is at least version 1.0.1.2 (1000102)
```
geekcash-cli getinfo
```

### 2. Install Sentinel

Clone the Sentinel repo and install Node packages.
```
git clone https://github.com/geekcash/node-sentinel.git && cd node-sentinel
npm i
```

### 3. Config.js
RPC User & Password in `.geekcash/geekcash.conf`

```js

version:'1.2.1',
coin: {
    id: 'GEEK',
    rpc: {
        url: 'http://127.0.0.1:6888/',
        method: 'POST',
        auth: {
            username: 'rpc-username',
            password: 'rpc-password'
        },
    }
}  

```

### 4. Run app
```
pm2 start ./app.js --name sentinel
```

Setup startup script
```js
// Restarting PM2 with the processes you manage on server boot/reboot is critical. To solve this, just run this command to generate an active startup script:
pm2 startup
```

### MIT License

Copyright (c) 2018 GeekCash Team (https://geekcash.org)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.