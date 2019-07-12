## Getting started

CJ stands for Convergence Journalism, to report an event by a mixture of medias.

## 17级融合新闻网页端作品使用说明

1. 在 Visual Studio Code 终端 > 新建终端

2. 安装 node/npm 环境

可参考[文档](https://github.com/teamMolecularFood/MGAT/blob/develop/doc/Configuration.md?1562914201039 "node/npm")

3. 启动开发环境

运行 npm run dev:index，会在浏览器打开 http://localhost:8001/，支持模块热替换，双击Ctrl+c结束调试，

注：因为采用了HMR局部更新，所以会导致 skrollr 在页面生成后加载，从而视差滚动会停留在初始状态。

4. 构建生成环境

运行 npm run pro:index，会由webpack产生一个分发目录 ./dist/index，其中的文件可直接部署在服务器中。

5. 启动服务器

在分发目录生成后，运行 node run client.js 启动客户端，会在http://localhost:8080/运行，双击Ctrl+c结束进程，

6. 关于线上版本

使用 pm2 守护进程，执行 pm2 start client.js，然后通过 Nginx 设置反向代理，监听公网的 666 端口。

http://139.224.238.230:666/

6. 关于网页中的图片和视频

采用了七牛云储存的内容分发网络 CDN 提供在线资源。

7. 技术栈

html css js skrollr vue element node pm2 nginx