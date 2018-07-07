# NODEJS 服务端项目基础范例

> 使用 Express 框架 和 MongoDB 数据库 搭建的 NODEJS 服务端项目。

## 如何开始？

- 安装依赖

依赖安装可以使用 Node.js 自带的NPM包管理器进行安装;
yarn 包管理工具安装依赖 （推荐使用 yran 包管理），yarn 需要另外安装，详细信息请参考 yarn 官方网站。

> 安装依赖如下：
```bash
yarn install
```

## 目录结构

```bash
|-- RN
    |-- .babelrc // babel 编译配置
    |-- .editorconfig // 编辑器样式配置
    |-- .eslintignore // 代码质量校验配置忽略项
    |-- .eslintrc.js // 代码质量校验配置
    |-- .gitignore // git代码管理忽略项配置
    |-- .postcssrc.js // postcss css 编译配置
    |-- Gitlab-Flow.md // gitlab工作流说明文档
    |-- index.html // 应用入口文件
    |-- package.json // package.json 依赖关系管理，项目构建配置相关信息。
    |-- README.md // 项目说明文档
    |-- yarn.lock // yarn 依赖版本管理
    |-- build // webpack 构建脚本
    |   |-- build.js
    |   |-- check-versions.js
    |   |-- logo.png
    |   |-- utils.js
    |   |-- vue-loader.conf.js
    |   |-- webpack.base.conf.js
    |   |-- webpack.dev.conf.js
    |   |-- webpack.prod.conf.js
    |   |-- webpack.test.conf.js
    |-- config // 构建环境变量配置
    |   |-- base-url.js // API 变量
    |   |-- dev.env.js // 开发环境变量
    |   |-- config.js // 环境参数配置
    |   |-- prod.env.js // 生产环境变量
    |   |-- test.env.js // 测试环境变量
    |-- src // 项目源码
    |   |-- App.vue // 入口组件
    |   |-- main.js //
    |   |-- assets // 资源目录 资源目录 assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。 如果你的静态资源文件需要 Webpack 做构建编译处理，可以放到 assets 目录，否则可以放到 static 目录中去。
    |   |-- components // vue组件目录
    |   |-- mixin // mixin功能
    |   |-- plugins // 插件
    |   |   |-- axios.js // AJAX请求
    |   |-- router // 路由
    |   |   |-- config.js // 主路由
    |   |-- sections //
    |   |   |-- README.md
    |   |   |-- common
    |   |   |   |-- HeadBanner.vue
    |   |   |-- show-case
    |   |-- store // vuex 状态管理
    |   |   |-- config.js
    |   |   |-- README.md
    |   |   |-- actions
    |   |   |   |-- action-user-example.js
    |   |   |   |-- action-xxx.js
    |   |   |   |-- config.js
    |   |   |-- getters
    |   |   |   |-- getter-meet.js
    |   |   |   |-- config.js
    |   |   |-- mutations
    |   |       |-- config.js
    |   |       |-- mutation-address-select-back.js
    |   |       |-- mutation-meet.js
    |   |       |-- README.md
    |   |-- themes // 主题
    |   |-- views // 页面
    |       |-- Home.vue
    |       |-- config.js
    |       |-- sub-views-folder
    |           |-- PageView.vue
    |-- static // 静态资源
    |   |-- favicon.ico
    |   |-- README.md
    |   |-- images
    |-- test // 测试
        |-- e2e
        |   |-- nightwatch.conf.js
        |   |-- runner.js
        |   |-- custom-assertions
        |   |   |-- elementCount.js
        |   |-- specs
        |       |-- test.js
        |-- unit
            |-- .eslintrc
```


