# snapdrop
[HomePage](https://www.fairysoft.net/post/66.html)\
[DEMO](https://snapdrop.fairysoft.net/)\
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

docker£º

```bash
docker run -itd --name=snapdrop --net=host --restart=unless-stopped -e PORT=5000 -e OPTIONS=public nn200433/snapdrop:latest
```

docker-compose£º

```yml
version: '3'
services:
  snapdrop:
    image: nn200433/snapdrop:latest
    container_name: snapdrop
    restart: unless-stopped
    network_mode: host
    environment: 
	  # Ä¬ÈÏ3000
	  - PORT=5000
      - TZ=Asia/Shanghai
	  # Ä¬ÈÏÄÚÍø
      - OPTIONS=public
```