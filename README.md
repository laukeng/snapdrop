# qilindrop
[HomePage](https://www.qilindrop.cn)\
[DEMO](https://qilindrop.cn/)\
Modify from [Snapdrop](https://github.com/RobinLinus/Snapdrop) and [Node-Snapdrop](https://github.com/Bellisario/node-snapdrop).
Just Added Internet support and fixed the bug with Firefox receiving files.

## How to run
Download the repository in a folder, cd it, install all dependencies with `npm i` and use this command: `node index.js`.

## Run within your ip
Use this command, instead, to run not locally but in your public "sharable" ip: `node index.js public`.\
Make sure to check your ip address using your OS command.

## How to use
By default, it is used inside the LAN.\
Users who are not in the same LAN can establish a connection by entering the same room name.\
Enter a blank room name to return to LAN mode.

## How to use Docker

docker：

```bash
docker run -itd --name=qilindrop --net=host --restart=unless-stopped -e PORT=5000 -e OPTIONS=public nn200433/qilindrop:latest
```

docker-compose：

```yml
version: '3'
services:
  qilindrop:
    image: nn200433/qilindrop:latest
    container_name: qilindrop
    restart: unless-stopped
    network_mode: host
    environment: 
	  # 默认3000
	  - PORT=5000
      - TZ=Asia/Shanghai
	  # 默认内网
      - OPTIONS=public
```