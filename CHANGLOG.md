# 变更日志

## [1.1.0] - 2018-02-27

- Q: .npmrc 和 .gitignore 文件在模板目录中丢失
  A: npm 发布时默认忽略 .npmrc 和 .gitignore 等文件，并且不能通过配置项改变
  M: 官方仍然未解决，针对 .npmrc 和 .gitignore 两个文件，模板文件去掉.，在拷贝时再追加

## [1.1.0-0] - 2018-02-27

### Fixed

- Q: .npmrc 和 .gitignore 文件在模板目录中丢失
  A: npm 发布时默认忽略 .npmrc 和 .gitignore 等文件，并且不能通过配置项改变
  M: 官方仍然未解决，针对 .npmrc 和 .gitignore 两个文件，模板文件去掉.，在拷贝时再追加

## [1.1.0-0] - 2018-01-11

### Added

- 模板初始化脚手架
