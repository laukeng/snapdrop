FROM node:alpine3.17

# 项目地址（国内加速）
ARG gitUrl="https://ghproxy.com/https://github.com/nn200433/snapdrop.git"

# 定义环境变量
ENV TZ=Asia/Shanghai
ENV PORT=3000
ENV OPTIONS=

# 安装一些常用组件
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \ 
	apk add -U --no-cache \
	ca-certificates \
	bash \
	curl \
	git \
	openssh \
	tzdata && \
	cp /usr/share/zoneinfo/${TZ} /etc/localtime && \
	echo ${TZ} > /etc/timezone && \
	apk del tzdata && \
	mkdir -p /home

# 下载项目
RUN cd /home && \
    git clone --depth=1 "${gitUrl}" && \
	cd snapdrop && chmod +x entrypoint.sh

# 编译项目
RUN cd /home/snapdrop && \
    npm config set registry https://registry.npm.taobao.org && \
    # npm install -g pm2 && \
	npm install

# 指定默认工作目录
WORKDIR /home/snapdrop

# 默认3000端口
EXPOSE 3000/tcp

ENTRYPOINT ["/home/snapdrop/entrypoint.sh"]