# vue-demo04

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## element-ui 直接引入 注意事项
## 1. .babelrc 写法
{
  "presets": [
    ["env", { "modules": false }],
    "stage-3"
  ]
}

## element-ui 按需引入 
## 1. .babelrc 写法
{
  "presets": [["env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

## 安装依赖项
npm install babel-plugin-component -D
