## Getting started

CJ stands for Convergence Journalism, to report an event by a mixture of medias.

## 17级融合新闻网页端作品使用说明

### 技术栈

html css js skrollr vue element-ui node pm2 nginx

1. 网站整体使用 vue 框架
2. 贩卖机、导航和轮播图使用 element-ui
3. 所有视差滚动部分均使用 skrollr
4. 视频播放与暂停使用 HTML5 原生接口，并在vue中调用
5. 时间轴使用了一个开源库，并对其进行了修改

### 打开终端

在 Visual Studio Code 终端 > 新建终端

### 安装 node/npm 环境

可参考[文档](https://github.com/teamMolecularFood/MGAT/blob/develop/doc/Configuration.md?1562914201039 "node/npm")

### 启动开发环境

运行`npm run dev:index`，会在浏览器打开`http://localhost:8001/`，支持模块热替换，双击`Ctrl+c`结束调试。

注：因为采用了 HMR 局部更新，所以会导致 skrollr 在页面生成后加载，从而视差滚动会停留在初始状态，此时刷新页面即可。

### 构建生成环境

运行`npm run pro:index`，会由 webpack 产生一个分发目录`./dist/index`，其中的文件可直接部署在服务器中。

### 启动服务器

在分发目录生成后，运行`node client.js`启动客户端，会在`http://localhost:8080/`运行，双击Ctrl+c结束进程.

### 关于线上版本

使用 pm2 守护进程，执行`pm2 start client.js`，然后通过 Nginx 设置反向代理，监听公网的 666 端口。

可进入[网站](http://139.224.238.230:666/ "解忧杂货店")

### 关于网页中的视频

采用了七牛云储存的内容分发网络 CDN 提供在线资源，所以 public 目录中只有图片。
