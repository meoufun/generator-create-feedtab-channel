# generator-create-feedtab-channel

feedtab 新频道初始化脚手架

## 安装

```bash
# 安装 yeoman
$ npm i -g yo
# 安装 generator-create-feedtab-channel
$ npm i -g generator-create-feedtab-channel
``

## 使用

```bash
# 新建目录 并 转到新建目录里面
$ mkdir test-subtab && cd $_
# 开始运行
$ yo
```

![preview](http://doudou-space.qiniudn.com/generator-subtab.gif)

## 问题

使用 `generator-create-feedtab-channel` 过程中，如果报错 template 下面没有.gitignore文件和.npmrc文件，请使用 `npm update -g generator-create-feedtab-channel` 来更新。此原因为 npm 发布时默认忽略 .npmrc 和 .gitignore 等文件，时到现在官方仍然未解决，本人只能 hack 绕过，不在此赘述，对于 1.0.0 版本的报错，非常抱歉，由于本人测试不到位，导致问题没有提早暴露。