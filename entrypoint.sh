#!/bin/sh

# 启动麒麟传送
if [ -n "${OPTIONS}" ]; then
    echo "即将启动麒麟传送..."
	echo "参数：OPTIONS = ${OPTIONS}"
	pm2 start index.js -- ${OPTIONS}
else
    echo "即将启动麒麟传送..."
    pm2 start index.js
fi