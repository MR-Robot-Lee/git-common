# git的常用命令

### 创建一个 git 仓库的基本步骤

``` javascript
git init
git add README.md
git commit -m "first-commit"
// 这里 git@github.com:MR-Robot-Lee/git-common.git 仓库地址可以替换成你个人的 github 项目仓库地址
git remote add origin git@github.com:MR-Robot-Lee/git-common.git 
// 把已有的项目推送到上面的 github 项目仓库中
git push -u origin master
```

