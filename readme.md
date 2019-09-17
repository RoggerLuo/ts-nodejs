# Typescript and nodejs

## watch *.ts
task.json中的

```
    "option": "watch",
    "problemMatcher": [
        "$tsc-watch"
    ],
```
可以监听*.ts文件，如果有变化就编译到js

## watch js nodemon

launch.json中配置的nodemon可以监听js文件变化，一变化就重启程序

## require写成 import
tsconfig.json中的`lib:2017`