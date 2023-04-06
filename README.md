# qlindrop3.0
[HomePage](https://www.qilindrop.cn)\
[DEMO](https://qilindrop.cn/)\
Modify from [Snapdrop](https://github.com/RobinLinus/Snapdrop) and [Node-Snapdrop](https://github.com/Bellisario/node-snapdrop).
Just Added Internet support and fixed the bug with Firefox receiving files.

## How to run
Download the repository in a folder, `cd qilindrop`, install all dependencies with `npm i` and use this command: `node index.js`.

## Run within your ip
Use this command, instead, to run not locally but in your public "sharable" ip: `node index.js public`.\
Make sure to check your ip address using your OS command.

## How to use
By default, it is used inside the LAN.\
Users who are not in the same LAN can establish a connection by entering the same room name.\
Enter a blank room name to return to LAN mode.\

\
## 中文安装步骤：\
1、命令行运行git clone https://github.com/linzxcw/qilindrop.git ,或者在首页的code按钮，下载压缩包解压。\
2、安装nodejs框架，百度有详细教程，此处略过。\
3、进入qilindrop文件夹\
      `cd qilindrop`\
4、npm安装模块\
      `npm i`\
5、运行js文件\
      `node index.js`\
6、没有报错的话，打开本机ip地址的3000端口，例如：192.168.1.6:3000\
7、连接同一内网，使用其他设备打开上述网址，如果能相互发现即安装成功。
