FROM node:alpine3.17

# 项目地址（国内加速）
ARG gitUrl="https://ghproxy.com/https://github.com/linzxcw/qilindrop.git"

# 定义环境变量
ENV TZ=Asia/Shanghai

# 安装一些常用组件
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \ 
	apk add -U --no-cache \
	ca-certificates \
	bash \
	curl \
	git \
	openssh \
	su-exec \
	tzdata && \
	cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
	echo ${TZ} > /etc/timezone && \
	apk del tzdata && \
	mkdir -p /home

# 下载项目
RUN cd /home && \
    git clone --depth=1 "${gitUrl}"

# 编译项目
RUN cd /home/qilindrop && \
    npm install --registry=https://registry.npm.taobao.org

# 指定默认工作目录
WORKDIR /home/qilindrop

# 默认3000端口
EXPOSE 3000/tcp

ENTRYPOINT node index.js